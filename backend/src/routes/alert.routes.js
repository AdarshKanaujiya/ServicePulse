const express = require("express");

const controller = require("../controllers/alert.controller");

const router = express.Router();

router.get("/", controller.getAlerts);

router.patch("/:id", controller.updateAlertStatus);

module.exports = router;
