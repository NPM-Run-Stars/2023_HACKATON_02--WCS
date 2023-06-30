const models = require("../models");

const browse = (req, res) => {
  models.phones
    .findAll()
    .then((rows) => {
      res.send(rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const modelId = parseInt(req.body.model_id, 10);
  const ramId = parseInt(req.body.ram_id, 10);
  const storageId = parseInt(req.body.storage_id, 10);
  const caseId = parseInt(req.body.case_id, 10);
  const categoryId = parseInt(req.body.category_id, 10);
  const localisationId = parseInt(req.body.localisation_id, 10);

  models.phones
    .insert(modelId, ramId, storageId, caseId, categoryId, localisationId)
    .then(([result]) => {
      res.location(`/phones/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
