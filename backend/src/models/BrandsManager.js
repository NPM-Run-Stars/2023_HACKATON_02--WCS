const AbstractManager = require("./AbstractManager");

class BrandsManager extends AbstractManager {
  constructor() {
    super({ table: "brands" });
  }

  findByBrand(brand) {
    return this.database.query(`select * from  ${this.table} where brand = ?`, [
      brand,
    ]);
  }
}

module.exports = BrandsManager;
