/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
    // Create an object to hold NFT metadata
    let nft = {
        name: name,
        description: description,
        image: image
    };

    // Store the NFT object in the array
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
        console.log("-------------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT("NFT 1", "Description for NFT 1", "image1.jpg");
mintNFT("NFT 2", "Description for NFT 2", "image2.jpg");
mintNFT("NFT 3", "Description for NFT 3", "image3.jpg");

// Call listNFTs to print NFT details
console.log("Listing all NFTs:");
listNFTs();

// Call getTotalSupply to print total NFTs minted
console.log("Total NFTs minted: " + getTotalSupply());
