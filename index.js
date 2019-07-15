const log4js = require('log4js');
log4js.configure('./log4js.json');
const logger = log4js.getLogger("app");
const TxLog = require('./tx_log');
const MySQL = require('./db/mysql');
const { makeEventWatcher } = require('./ethUtils');
const { makeRepo } = require('./repo');

logger.info("Eth Listener Start");

// configure Data Store.
const db = new MySQL();
const repo = makeRepo(db);

// configure CallBack to be triggered.
const transferEventCallback = async (log) => {
  try {
    logger.info("FROM", log.args.from);
    logger.info("TO", log.args.to);
    logger.info("VALUE", log.args.value);
    const transferLog = TxLog.build(log).make();
    await repo.saveTx(transferLog);
  } catch (ex) {
    logger.error("ERROR", ex);
    console.log(ex);
  }
};

// configure EventWatcher
makeEventWatcher('Transfer', transferEventCallback); 






