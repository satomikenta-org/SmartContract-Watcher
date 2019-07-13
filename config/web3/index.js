require('dotenv').config();
const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider(process.env.GETH_URL));

module.exports = web3;