const {ethers , upgrades} = require('hardhat');

const PROXY = '0x56EbDcc3409a110A8595cb0c831E89fE55DC8Dda';

async function main(){
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  await upgrades.upgradeProxy(PROXY,BoxV2);
  console.log('box Upgraded');

}

main();