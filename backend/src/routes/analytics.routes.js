const express= require("express");

const controller = require("../controllers/analytics.controller");
const router = express.Router();

router.get("/top-failing-services", controller.topFailingServices);
router.get("/top-endpoints", controller.getTopEndpoints);
router.get("/latency", controller.getAvgLatency);
router.get("/incidents", controller.getIncidentSummary);

router.get("/summary", controller.summary);

module.exports = router;