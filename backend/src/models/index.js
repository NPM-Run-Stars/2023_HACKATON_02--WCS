require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ItemManager = require("./ItemManager");

models.item = new ItemManager();
models.item.setDatabase(pool);

const AuthManager = require("./AuthManager");

models.auth = new AuthManager();
models.auth.setDatabase(pool);

const ProfilsManager = require("./ProfilsManager");

models.profils = new ProfilsManager();
models.profils.setDatabase(pool);

const LocalisationManager = require("./LocalisationManager");

models.localisations = new LocalisationManager();
models.localisations.setDatabase(pool);

const BrandsManager = require("./BrandsManager");

models.brands = new BrandsManager();
models.brands.setDatabase(pool);

const MobileModelsManager = require("./MobileModelsManager");

models.mobileModels = new MobileModelsManager();
models.mobileModels.setDatabase(pool);

const FaqsManager = require("./FaqsManager");

models.faqs = new FaqsManager();
models.faqs.setDatabase(pool);

const RamsManager = require("./RamsManager");

models.rams = new RamsManager();
models.rams.setDatabase(pool);

const StoragesManager = require("./StoragesManager");

models.storages = new StoragesManager();
models.storages.setDatabase(pool);

const CasesManager = require("./CasesManager");

models.cases = new CasesManager();
models.cases.setDatabase(pool);

const ScreensManager = require("./ScreensManager");

models.screens = new ScreensManager();
models.screens.setDatabase(pool);

const PhonesManager = require("./PhonesManager");

models.phones = new PhonesManager();
models.phones.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
