const service = require("../services/tickets.service");

const getTickets = async (req, res) => {
  try {
    const tickets = await service.getTickets();

    res.json(tickets);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createTicket = async (req, res) => {
  try {
    const ticket = await service.createTicket(req.body);

    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateTicket = async (req, res) => {
  try {
    const ticket = await service.updateTicket(req.params.id, req.body.status);

    res.json(ticket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getTickets,
  createTicket,
  updateTicket,
};
