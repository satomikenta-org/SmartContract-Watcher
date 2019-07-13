const { unitConverter } = require('../ethUtils');

class BurnTxLog {
  constructor( { to, value }) {
    this.from = 'burnable_owner';
    this.from_id = "test_from_id";
    this.to = to;
    this.to_id = "test_to_id";
    this.value = unitConverter(value, 'ether');
  }

  get category() {
    return 'burn';
  }
}

module.exports = BurnTxLog;
