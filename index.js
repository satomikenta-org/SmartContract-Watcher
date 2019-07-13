const TxLog = require('./tx_log');
const MySQL = require('./db/mysql');
const { makeEventWatcher } = require('./ethUtils');
const { makeRepo } = require('./repo');

// configure Data Store.
const db = new MySQL();
const repo = makeRepo(db);

// configure CallBack to be triggered.
const transferEventCallback = async (log) => {
  try {
    const transferLog = TxLog.build(log).make();
    await repo.saveTx(transferLog);
  } catch (ex) {
    console.log(ex);
  }
};

// configure EventWatcher
makeEventWatcher('Transfer', transferEventCallback); 






