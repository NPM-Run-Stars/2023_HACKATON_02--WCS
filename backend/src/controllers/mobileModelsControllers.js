const models = require("../models");

const browse = (req, res) => {
  const { brand } = req.query;
  models.mobileModels
    .findAllByBrand(brand)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
