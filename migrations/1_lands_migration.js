// const Land = artifacts.require("Land");
const fs = require('fs');
const Lands = artifacts.require("Lands");

module.exports = async function (deployer) {
  await deployer.deploy(Lands);

  // create a JSON object
  const contract = {
    address: Lands.address
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
