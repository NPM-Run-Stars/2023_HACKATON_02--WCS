const AbstractManager = require("./AbstractManager");

class MobileModelsManager extends AbstractManager {
  constructor() {
    super({ table: "mobile_models" });
  }
}

module.exports = MobileModelsManager;
