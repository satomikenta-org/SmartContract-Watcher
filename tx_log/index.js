const TransferTxLog = require('./transfer');
const BurnTxLog = require('./burn');

class TxLog {

  static build(log) {
    return new TxLog(log);
  };

  constructor(log) {
    this.log = log;
  };

  make() {
    const { event, args } = this.log;
    switch(event) {
      case 'Transfer': 
        return new TransferTxLog({ from: args.from, to: args.to, value: args.value});
      case 'Burn': 
        return new BurnTxLog({ to: args.to, value: args.value}); 
        // TODO: modify SmartContract Burn event to fit above format.
      default: break;
    }
  }
}

module.exports = TxLog;