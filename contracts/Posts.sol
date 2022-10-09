// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
pragma abicoder v2;

contract Partier{
    uint public totalPosts = 0;
    uint public totalConfs = 0;
    Post[] public posts; // post id to post
    mapping(uint => Conference) public conferences; // conference id to conference
    mapping(address => Profile) public profiles; // address to profile

    struct Post {
        uint id;
        // uint conference;
        address payable author;
        string partyDesc;
        uint256 ticPrice;
        string imageHash;
        string profileName;
        string profImageHash;
    }

    struct Profile {
        string profileName;
        string profImageHash;
        uint[] posts;
        uint totalprofilePosts;
    }

    struct Conference {
        uint id;
        string confName;
        uint[] posts;
        uint totalConfPosts;
    }

    event Posted (
        uint id,
        address payable author,
        string partyDesc,
        uint256 ticPrice,
        string imageHash,
        string profileName,
        string profImageHash
    );

    event ProfileCreated (
        string profileName,
        string profImageHash
    );

    event ConferenceCreated (
        uint id,
        string confName
    );



    function uploadPost(string memory _profileName, string memory _profImageHash, string memory _desc, uint256 _price, string memory _image) public {
        totalPosts++;
        // Conference storage conf = conferences[_conference];
        // Profile storage prof = profiles[msg.sender];
        
        // require(conf.id != 0, "This conference is not registred, please ask for an admin to register it");
        // require(bytes(prof.profileName).length != 0, "This profile is not registred, please ask for an admin to register it");

        // conf.totalConfPosts++;
        // prof.totalprofilePosts++;

        // conf.posts.push(totalPosts);
        // prof.posts.push(totalPosts);

        posts.push(Post(totalPosts, payable(msg.sender), _desc, _price, _image, _profileName, _profImageHash));
        emit Posted(totalPosts, payable(msg.sender), _desc, _price, _image, _profileName, _profImageHash);
    }

    function createProfile(string memory _profileName, string memory _image) public {
        profiles[msg.sender] = Profile(_profileName, _image, new uint[](0),0);
        emit ProfileCreated(_profileName, _image);
    }

    function createConference(string memory _confName) public {
        totalConfs++;

        conferences[totalConfs] = Conference(totalConfs, _confName, new uint[](0),0);
        emit ConferenceCreated(totalConfs, _confName);
    }

    function GetPosts() public view returns(Post[] memory) {
        return posts;
    }
    
}