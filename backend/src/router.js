const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const faqsControllers = require("./controllers/faqsControllers");

router.get("/faqs", faqsControllers.browse);
router.get("/faqs/:id", faqsControllers.read);
router.put("/faqs/:id", faqsControllers.edit);
router.post("/faqs", faqsControllers.add);
router.delete("/faqs/:id", faqsControllers.destroy);

const casesControllers = require("./controllers/casesControllers");

router.get("/cases", casesControllers.browse);

const screensControllers = require("./controllers/screensControllers");

router.get("/screens", screensControllers.browse);

module.exports = router;
