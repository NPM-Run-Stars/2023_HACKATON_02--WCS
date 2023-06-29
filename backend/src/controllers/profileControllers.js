const models = require("../models");

const findUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.profils
    .findUserById(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findUser,
};
