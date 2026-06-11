const express = require("express");

const router = express.Router();

const {
  getIncidents,
  getIncident,
  createIncident,
  updateIncident,
  deleteIncident,
} = require("../controllers/incidents.controller");

router.get("/", getIncidents);

router.get("/:id", getIncident);

router.post("/", createIncident);

router.patch("/:id", updateIncident);

router.delete("/:id", deleteIncident);

module.exports = router;