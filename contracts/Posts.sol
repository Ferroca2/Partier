// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DecentraParty{
    uint public totalPosts = 0;
    mapping(uint => Post) public posts;

    struct Post {
        uint id;
        string partyDesc;
        uint256 ticPrice;
        string imageHash;
        string conference;
        address payable author;
    }

    event Posted (
        uint id,
        string partyDesc,
        uint256 ticPrice,
        string imageHash,
        string conference,
        address payable author
    );

    function uploadPost(string memory _desc, uint256 _ticPrice, string memory _imgHash, string memory _conference, address payable _author) public {
        totalPosts++;
        posts[totalPosts] = Post(totalPosts, _desc, _ticPrice, _imgHash, _conference, _author);
        // conferences[_conference];
        emit Posted(totalPosts, _desc, _ticPrice, _imgHash, _conference, _author);
    }

    
}