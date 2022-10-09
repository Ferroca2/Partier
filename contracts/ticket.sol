// minting contract for ticket nfts

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract PartierTicket is ERC721, Ownable {
   uint256 public mintPrice;
   uint256 public totalSupply;
   uint256 public maxSupply;
   bool public isPublicMintEnabled; 
   string internal baseTokenUri;
   address payable public withdrawWallet;
   mapping(address => uint256) public walletMints;

   constructor() payable ERC721('Ticket','TKT') {
    mintPrice = 0.01 ether; //can hardcode for the hackathon
    totalSupply = 0;
    maxSupply = 5; 
    baseTokenUri = "ipfs://bafkreicccaxlkfxxycckddz7hn34ib7w4sg4izcriuab34yyialgvre7my";
    withdrawWallet = payable(msg.sender); // owner of the contract, who deployed it
    
    

   }

    // kickstart mint
   function setIsPublicMintEnabled (bool isPublicMintEnabled_) external onlyOwner {
    isPublicMintEnabled = isPublicMintEnabled_;
   }

    //image link on ipfs
   function setBaseTokenUri (string calldata baseTokenUri_) external onlyOwner {
    baseTokenUri = baseTokenUri_;
   }

   //function tokenURI(uint256 tokenId_) public view override returns (string memory) {
    //require(exists(tokenId), "Token does not exist");
    //return baseTokenUri;
  // }
   function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        //_requireMinted(tokenId);

        //string memory baseURI = _baseURI();
        return bytes(baseTokenUri).length > 0 ? string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId),".json")) : "";
    }


   function withdraw() external onlyOwner {
    (bool success, ) = withdrawWallet.call{ value: address(this).balance} ('');
    require(success, 'withdraw failed'); }
   

   function mint(uint256 quantity_) public payable {
    require(isPublicMintEnabled, 'minting is not enabled');
    //require(msg.value == quantity_ * mintPrice, 'wrong mint value');
    require(totalSupply + quantity_ <= maxSupply, 'we are sold out');
    
    for (uint256 i = 0; i<quantity_; i++){
        uint256 newTokenId = totalSupply +1;
        totalSupply++;
        _safeMint(msg.sender, newTokenId);
    }
   }
   }