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

  insert(brand) {
    return this.database.query(`insert into ${this.table} (brand) values (?)`, [
      brand,
    ]);
  }
}

module.exports = BrandsManager;
