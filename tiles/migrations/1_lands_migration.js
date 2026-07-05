// const Land = artifacts.require("Land");
const fs = require('fs');
const Lands = artifacts.require("Lands");
const Kingdom = artifacts.require("Kingdom");

module.exports = async function (deployer) {
  await deployer.deploy(Lands);

  await deployer.deploy(Kingdom, Lands.address)
  // create a JSON object
  const contract = {
    landAddress: Lands.address,
    kingdomAddress: Kingdom.address
  };

  // convert JSON object to string
  const data = JSON.stringify(contract);

  // write JSON string to a file
  fs.writeFile('./shatterdTiles/src/Data/contracts.json', data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
  });
  
};
