const AbstractManager = require("./AbstractManager");

class MobileModelsManager extends AbstractManager {
  constructor() {
    super({ table: "mobile_models" });
  }

  findAllByBrand(brand) {
    let url = `select m.id, m.model, b.brand from ${this.table} m INNER JOIN brands b ON m.brand_id = b.id `;
    if (brand) {
      url += " WHERE b.brand = ?";
    }
    return this.database.query(url, [brand]);
  }

  insert(model, brandId) {
    return this.database.query(
      `insert into ${this.table} (model , brand_id) values (? , ?)`,
      [model, brandId]
    );
  }
}

module.exports = MobileModelsManager;
