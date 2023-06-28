const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  insertProfils(userId, profil) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, firstname, lastname, localisation_id) values (?, ?, ?, ?)`,
      [userId, profil.firstname, profil.lastname, profil.localisation]
    );
  }
}

module.exports = ProfilsManager;
