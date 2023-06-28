const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const brandsControllers = require("./controllers/brandsControllers");

router.get("/brands", brandsControllers.browse);
router.get("/brands/:brand", brandsControllers.read);
router.post("/brands", brandsControllers.add);
router.put("/brands/:id", brandsControllers.edit);
router.delete("/brands/:id", brandsControllers.destroy);

const mobileModelsControllers = require("./controllers/mobileModelsControllers");

router.get("/models", mobileModelsControllers.browse);
router.post("/models", mobileModelsControllers.add);
router.delete("/models/:id", mobileModelsControllers.destroy);

const faqsControllers = require("./controllers/faqsControllers");

router.get("/faqs", faqsControllers.browse);
router.get("/faqs/:id", faqsControllers.read);
router.put("/faqs/:id", faqsControllers.edit);
router.post("/faqs", faqsControllers.add);
router.delete("/faqs/:id", faqsControllers.destroy);

const ramsControllers = require("./controllers/ramsControllers");

router.get("/rams", ramsControllers.browse);
router.get("/rams/:id", ramsControllers.read);
router.put("/rams/:id", ramsControllers.edit);
router.post("/rams", ramsControllers.add);
router.delete("/rams/:id", ramsControllers.destroy);

const storagesControllers = require("./controllers/storagesControllers");

router.get("/storages", storagesControllers.browse);
router.get("/storages/:id", storagesControllers.read);
router.put("/storages/:id", storagesControllers.edit);
router.post("/storages", storagesControllers.add);
router.delete("/storages/:id", storagesControllers.destroy);

const casesControllers = require("./controllers/casesControllers");

router.get("/cases", casesControllers.browse);

const screensControllers = require("./controllers/screensControllers");

router.get("/screens", screensControllers.browse);

module.exports = router;
