const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Achievements = artifacts.require('Achievements');

module.exports = async function (deployer) {
	const instance = await deployProxy(Achievements, [], { deployer });
	console.log('Deployed', instance.address);
};