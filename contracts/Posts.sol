// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DecentraParty{
    uint public totalPosts = 0;
    uint public totalConfs = 0;
    uint public totalProfiles = 0;
    mapping(uint => Post) public posts; // post id to post
    mapping(uint => Conference) public conferences; // conference id to conference
    mapping(address => Profile) public profiles; // address to profile

    struct Post {
        uint id;
        uint conference;
        address payable author;
        string partyDesc;
        uint256 ticPrice;
        string imageHash;
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
        uint conference,
        address payable author,
        string partyDesc,
        uint256 ticPrice,
        string imageHash
    );

    event ProfileCreated (
        string profileName,
        string profImageHash
    );

    event ConferenceCreated (
        uint id,
        string confName
    );



    function uploadPost(uint _conference, address payable _author, string memory _desc, uint256 _price, string memory _image) public {
        totalPosts++;
        Conference storage conf = conferences[_conference];
        Profile storage prof = profiles[_author];

        conf.totalConfPosts++;
        prof.totalprofilePosts++;

        conf.posts.push(totalPosts);
        prof.posts.push(totalPosts);

        posts[totalPosts] = Post(totalPosts, _conference, _author, _desc, _price, _image);
        emit Posted(totalPosts, _conference, _author, _desc, _price, _image);
    }

    function createProfile(string memory _profileName, string memory _image) public {
        profiles[msg.sender] = Profile(_profileName, _image, new uint[](0),0);
        emit ProfileCreated(_profileName, _image);
    }

    function createConference(string memory _profileName, string memory _image) public {
        totalProfiles++;

        profiles[msg.sender] = Profile(_profileName, _image, new uint[](0),0);
        emit ProfileCreated(_profileName, _image);
    }



    // function createConference(string memory _confName,) public {
    //     totalConfs++;
    //     conferences
        


    // }


    // function viewPost(address _author) public view returns(Post[] memory timeline) {
        
        
    //     return profile[following[_author]];
    // }




    
}