
function makeRepo ( db ){
  return Object.freeze({
    saveTx
  });
  
  async function saveTx(txLog) {
    await db.insertTx(txLog);
  };
};

module.exports = { 
  makeRepo
};