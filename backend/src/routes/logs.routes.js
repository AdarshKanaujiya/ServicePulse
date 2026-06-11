const express = require("express");

const controller = require("../controllers/logs.controller");

const router = express.Router();

router.get("/", controller.getLogs);

router.post("/", controller.createLog);

module.exports = router;
