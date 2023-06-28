const AbstractManager = require("./AbstractManager");

class BrandsManager extends AbstractManager {
  constructor() {
    super({ table: "brands" });
  }
}

module.exports = BrandsManager;
