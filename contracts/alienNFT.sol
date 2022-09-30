// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract alienNFT is ERC721Enumerable, Ownable {
    
    using Strings for uint;
    string _baseTokenURI = "bafybeico2zqeqeb5cau5aj7b7ouek326w65g3jbhhamsnh637vbm5z5i3q";
    string baseExtension = ".json";
    string originalUri = "bafybeigm4w5nt5nv3w37xyl63ldazwypu7yq5g6pt7oulplhes2rj557xq";

    bool public _paused;

    uint8 public maxWhitelistedAddresses = 100;
    uint8 public numAddressesWhitelisted;
    uint16 public maxTokenIds = 10000;
    uint16 public tokenIds;
    uint16 public giveawayWinnersCount;
    uint public _price = 0 ether;

    mapping(address => bool) public whitelisted;
    mapping(address => bool) public giveawayWinners;
    address[] whitelistedAddresses;
    
    modifier onlyWhenNotPaused {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor () ERC721("AlienNFT", "ALN") {}


    function addAddressToWhitelist() external onlyWhenNotPaused {
        require(!whitelisted[msg.sender], "Sender has already been whitelisted");
        require(numAddressesWhitelisted < maxWhitelistedAddresses, "More addresses cant be added, limit reached");
        whitelisted[msg.sender] = true;
        whitelistedAddresses.push(msg.sender);
        unchecked {
            numAddressesWhitelisted += 1;
        }
    }

    function addAddress(address[] memory _address) external onlyOwner {
        for (uint8 i = 0; i < _address.length;) {
            require(!whitelisted[_address[i]], "Address has already been whitelisted");
            require(numAddressesWhitelisted < maxWhitelistedAddresses, "More addresses cant be added, limit reached");
            whitelisted[_address[i]] = true;
            whitelistedAddresses.push(_address[i]);
            numAddressesWhitelisted += 1;
            unchecked{ i++; }
        }
    }

    function whitelistedAddressesList() external view onlyOwner returns (address[] memory){
        return whitelistedAddresses;
    }

    function mint() external payable onlyWhenNotPaused {
        require(tokenIds < maxTokenIds, "Exceed maximum supply");
        require(msg.value >= _price, "Ether sent is not correct");
        unchecked {
            tokenIds += 1;
        }
        address _owner = owner();
        (bool sent, ) =  _owner.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        _safeMint(msg.sender, tokenIds);
    }

    function mintBundle(address[] memory addresses) external onlyWhenNotPaused onlyOwner{
        require(addresses.length+tokenIds < maxTokenIds,"Exceed maximum supply");
        for(uint8 i=0;i< addresses.length;){
            unchecked {
                tokenIds += 1;
            }
            _safeMint(addresses[i], tokenIds);
            giveawayWinners[addresses[i]]=true;
            giveawayWinnersCount += 1;
            unchecked{ i++; }
        }
    }

    function reveal() external onlyOwner{
        _baseTokenURI = originalUri;
    }

    function withdraw() external{
        payable(owner()).transfer(address(this).balance);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return string(abi.encodePacked("ipfs://",_baseTokenURI,"/"));
    }

    function tokenURI(uint tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return string(abi.encodePacked(baseURI, tokenId.toString(),baseExtension));
    }

    function setPaused(bool val) external onlyOwner {
        _paused = val;
    }
    
    receive() external payable {}
    fallback() external payable {}
}
