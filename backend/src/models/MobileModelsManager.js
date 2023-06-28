const AbstractManager = require("./AbstractManager");

class MobileModelsManager extends AbstractManager {
  constructor() {
    super({ table: "mobile_models" });
  }
  findAllByBrand(brand) {
    let url = `select m.id, m.model from ${this.table} m `;
    if (brand) {
      url += " INNER JOIN brands b ON m.brand_id = b.id WHERE brand = ?"
    }
    return this.database.query(url, [brand]);
  }
}

module.exports = MobileModelsManager;
