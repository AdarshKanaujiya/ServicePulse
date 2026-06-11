const express = require("express");

const controller = require("../controllers/tickets.controller");

const router = express.Router();

router.get("/", controller.getTickets);

router.post("/", controller.createTicket);

router.patch("/:id", controller.updateTicket);

module.exports = router;
