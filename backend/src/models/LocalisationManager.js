const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "localisations" });
  }

  getlocalisation() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = AuthManager;
