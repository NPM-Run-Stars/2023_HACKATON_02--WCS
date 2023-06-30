const AbstractManager = require("./AbstractManager");

class StoragesManager extends AbstractManager {
  constructor() {
    super({ table: "storages" });
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
      `insert into ${this.table} (property_storage, value_storage) values (?, ?)`,
      [property, value]
    );
  }

  update(storages) {
    return this.database.query(`update ${this.table} set  ? where id = ?`, [
      storages,
      storages.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = StoragesManager;
