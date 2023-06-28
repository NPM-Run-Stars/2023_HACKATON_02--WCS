const AbstractManager = require("./AbstractManager");

class ScreensManager extends AbstractManager {
  constructor() {
    super({ table: "screens" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = ScreensManager;
