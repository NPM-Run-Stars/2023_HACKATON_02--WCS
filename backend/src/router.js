const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const localisationControllers = require("./controllers/localisationControllers");
const brandsControllers = require("./controllers/brandsControllers");
const mobileModelsControllers = require("./controllers/mobileModelsControllers");
const faqsControllers = require("./controllers/faqsControllers");
const ramsControllers = require("./controllers/ramsControllers");
const storagesControllers = require("./controllers/storagesControllers");
const casesControllers = require("./controllers/casesControllers");
const screensControllers = require("./controllers/screensControllers");
const profileControllers = require("./controllers/profileControllers");
const phonesControllers = require("./controllers/phonesControllers");

const { hashPassword } = require("./services/auth");
const { checkUserData } = require("./services/checkUserData");
const { checkUser, checkAdmin } = require("./services/jwt");

router.post("/signin", checkUserData, authControllers.signin);

router.use(checkUser);
router.get("/profile/:id", profileControllers.findUser);
router.get("/profile", profileControllers.browse);
router.get("/admin/profile/:id", profileControllers.getUserinfo);
router.put("/profile/update", profileControllers.editUserbyId);
router.put("/admin/update/:id", profileControllers.AdmineditUserbyId);
router.get("/brands", brandsControllers.browse);
router.get("/brands/:brand", brandsControllers.read);
router.get("/models", mobileModelsControllers.browse);
router.get("/models/:id", mobileModelsControllers.read);
router.get("/faqs", faqsControllers.browse);
router.get("/faqs/:id", faqsControllers.read);
router.get("/rams", ramsControllers.browse);
router.get("/rams/:id", ramsControllers.read);
router.get("/storages", storagesControllers.browse);
router.get("/storages/:id", storagesControllers.read);
router.get("/cases", casesControllers.browse);
router.get("/screens", screensControllers.browse);
router.get("/phones", phonesControllers.browse);

router.use(checkAdmin);
router.get("/localisation", localisationControllers.browse);
router.post("/signup", checkUserData, hashPassword, authControllers.signup);

router.post("/brands", brandsControllers.add);
router.put("/brands/:id", brandsControllers.edit);
router.delete("/brands/:id", brandsControllers.destroy);

router.post("/models", mobileModelsControllers.add);
router.delete("/models/:id", mobileModelsControllers.destroy);

router.put("/faqs/:id", faqsControllers.edit);
router.post("/faqs", faqsControllers.add);
router.delete("/faqs/:id", faqsControllers.destroy);

router.put("/rams/:id", ramsControllers.edit);
router.post("/rams", ramsControllers.add);
router.delete("/rams/:id", ramsControllers.destroy);

router.put("/storages/:id", storagesControllers.edit);
router.post("/storages", storagesControllers.add);
router.delete("/storages/:id", storagesControllers.destroy);

router.post("/phones", phonesControllers.add);

module.exports = router;
