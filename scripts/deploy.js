const {ethers,upgrades} = require("hardhat");

async function main(){ 
// deploying v1 of box contract 

const Box = await ethers.getContractFactory("Box");

const box = await upgrades.deployProxy(Box, [42],{
  initializer : "initialize",
})

await box.deployed();

console.log("Box Deployed", box.address);


}

main()
//npx hardhat run --network sepolia scripts/deploy.js 
//  npx hardhat verify --network sepolia <smartContractAddress>
