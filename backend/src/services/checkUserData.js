const Joi = require("joi");
const joi = require("joi");

const authSchema = () => {
  return joi.object({
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "fr"] },
    }),

    password: joi
      .string()
      .min(6)
      .max(30)
      .pattern(/^[a-zA-Z0-9]+$/)
      .required(),

    firstname: Joi.string().alphanum(),
    lastname: Joi.string().alphanum(),
    localisation: Joi.string().alphanum(),
  });
};

const checkUserData = (req, res, next) => {
  const { error } = authSchema("required").validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    if (error.details[0].type === "string.min") {
      res.status(400).json({
        msg: "Le mot de passe doit contenir entre 6 et 30 caractères, uniquement en minuscule, majuscule ou nombres.",
      });
    } else if (error.details[0].type === "string.email") {
      res.status(400).json({ msg: "L'email est invalide" });
    } else if (error.details[0].type === "string.empty") {
      res.status(400).json({ msg: "Le mots de passe est obligatoire" });
    } else {
      res.status(400).json({ msg: "Invalid email or password" });
    }
  } else {
    next();
  }
};

module.exports = {
  checkUserData,
};
