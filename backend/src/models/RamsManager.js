const AbstractManager = require("./AbstractManager");

class RamsManager extends AbstractManager {
  constructor() {
    super({ table: "rams" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(property, value) {
    return this.database.query(
      `insert into ${this.table} (property_ram, value_ram) values (?, ?)`,
      [property, value]
    );
  }

  update(rams) {
    return this.database.query(`update ${this.table} set  ? where id = ?`, [
      rams,
      rams.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = RamsManager;
