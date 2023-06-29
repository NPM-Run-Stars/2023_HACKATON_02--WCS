const AbstractManager = require("./AbstractManager");

class FaqsManager extends AbstractManager {
  constructor() {
    super({ table: "faqs" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(faqs) {
    return this.database.query(
      `insert into ${this.table} (question, answer) values (?, ?)`,
      [faqs.question, faqs.answer]
    );
  }

  update(faqs) {
    return this.database.query(`update ${this.table} set  ? where id = ?`, [
      faqs,
      faqs.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = FaqsManager;
