const AbstractManager = require("./AbstractManager");

class CasesManager extends AbstractManager {
  constructor() {
    super({ table: "cases" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = CasesManager;
