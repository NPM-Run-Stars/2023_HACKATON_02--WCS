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

  EditUserById(profil) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, src = ? where id = ?`,
      [profil.firstname, profil.lastname, profil.src, profil.id]
    );
  }

  getUser() {
    return this.database.query(
      `SELECT p.firstname, p.lastname, p.src, u.email, l.place
      FROM ${this.table} p
      JOIN users u ON p.user_id = u.id
      JOIN localisations l ON p.localisation_id = l.id;`,
      []
    );
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
