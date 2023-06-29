const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  findUserById(id) {
    return this.database.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findUser(id) {
    return this.database.query(
      `select firstname from ${this.table} where user_id = ?`,
      [id]
    );
  }

  insertProfils(userId, profil) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, firstname, lastname, localisation_id) values (?, ?, ?, ?)`,
      [userId, profil.firstname, profil.lastname, profil.localisation]
    );
  }
}

module.exports = ProfilsManager;
