require('dotenv').config();
const mysql = require('mysql2/promise');

class MySQL {  
  // target_address is for burn tx; // TODO: change SmartContract Burn Event: (target_address => to);
  async insertTx(txLog) {
    const { from, to, from_id, to_id, value } = txLog;
    const detail = txLog.category;
    const sql = "INSERT INTO transaction VALUES (null, ?, ?, ?, ?, ?, ?, now());"
    const holder = [from_id, from, to_id, to, value, detail];
    const connection = await mysql.createConnection(
      {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
      }
    );
    await connection.execute(sql, holder)
  }
}

module.exports = MySQL;