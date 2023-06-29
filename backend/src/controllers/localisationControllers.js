const models = require("../models");

const browse = (req, res) => {
  models.localisations
    .getlocalisation()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
