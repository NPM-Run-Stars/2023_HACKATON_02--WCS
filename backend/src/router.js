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

module.exports = router;
