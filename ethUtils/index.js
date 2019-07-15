const log4js = require('log4js');
log4js.configure('./log4js.json');
const logger = log4js.getLogger("app");
const contract = require('../config/contract');
const web3 = require('../config/web3');

/**
 * Make EventWatcher which subscribe specified eventName.
 * @param {string} eventName : eventName you wanna subscribe in your contract.
 * @param {function} callback : function triggered when your specified event occured.
 */
const makeEventWatcher = (eventName, callback) => {
  const eventWatcher = contract[eventName]();
  eventWatcher.watch((error, log) => {
    if (!error) {
      callback(log);
    } else {
      logger.error('Failed to Get EventLog', error);
    }
  });
};


/**
 * Convert value(Bignumber) into specified unit.
 * @param {Bignumber} value : number you wanna convert.  
 * @param {string} unit :one of ether units like 'ether' 'gwei' etc. 
 * @returns {number} 
 */
const unitConverter = (value, unit) => {
  return Number(web3.fromWei(value.toNumber(), unit)) * 1000000000000000000; // for now
}

module.exports = {
  makeEventWatcher,
  unitConverter
};