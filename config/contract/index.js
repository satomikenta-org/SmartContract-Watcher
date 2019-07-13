require('dotenv').config();
const web3 = require('../web3');
const ABI = require('./abi.js');
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const MyContract = web3.eth.contract(ABI);
const myContractInstance = MyContract.at(CONTRACT_ADDRESS);

module.exports = myContractInstance;