const { unitConverter } = require('../ethUtils');
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const TEST_FROM_ID = 0;
const TEST_TO_ID = 0;

class TransferTxLog {
  constructor({ from, to, value }) {
    this.from = from;
    this.from_id = TEST_FROM_ID;
    this.to_id = TEST_TO_ID;
    this.to = to;
    this.value = unitConverter(value, 'ether');
  }

  get category() {
    return this.from === ZERO_ADDRESS ? 'mint': 'transfer';
  }
}

module.exports = TransferTxLog;