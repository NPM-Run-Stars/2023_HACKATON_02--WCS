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

const browse = (req, res) => {
  models.profils
    .getUser()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserinfo = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.profils
    .getUserAllinfo(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editUserbyId = (req, res) => {
  const profilUpdate = req.body[0];
  models.profils
    .EditUserById(profilUpdate)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const AdmineditUserbyId = (req, res) => {
  const profilUpdate = req.body[0];
  const id = parseInt(req.params.id, 10);

  models.profils
    .AdminEditUserById(profilUpdate, id)
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
  editUserbyId,
  browse,
  getUserinfo,
  AdmineditUserbyId,
};
