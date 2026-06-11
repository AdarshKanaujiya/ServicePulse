const express = require("express");

const controller = require("../controllers/services.controller");

const router = express.Router();

router.get("/", controller.getServices);

router.post("/", controller.createService);

router.patch("/:id", controller.updateService);

module.exports = router;
