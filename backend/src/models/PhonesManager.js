const AbstractManager = require("./AbstractManager");

class PhonesManager extends AbstractManager {
  constructor() {
    super({ table: "phones" });
  }

  findAll() {
    return this.database.query(
      `SELECT m.brand_id, b.brand, p.model_id, m.model, p.ram_id, r.property_ram, r.value_ram, p.storage_id, s.property_storage, s.value_storage, p.case_id, c.state_case, c.state_description_case, c.value_case, x.label, p.localisation_id, l.place
      FROM ${this.table} p
      JOIN mobile_models m ON p.model_id = m.id
      JOIN rams r ON p.ram_id = r.id
      JOIN storages s ON p.storage_id = s.id
      JOIN cases c ON p.case_id = c.id
      JOIN categories x ON p.category_id = x.id
      JOIN localisations l ON p.localisation_id = l.id
      JOIN brands b ON b.id = m.brand_id`
    );
  }

  insert(modelId, ramId, storageId, caseId, categoryId, localisationId) {
    return this.database.query(
      `insert into ${this.table} (model_id , ram_id, storage_id, case_id, category_id, localisation_id) values (? , ?, ?, ?, ?, ?)`,
      [modelId, ramId, storageId, caseId, categoryId, localisationId]
    );
  }
}

module.exports = PhonesManager;
