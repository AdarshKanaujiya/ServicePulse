const repo = require("../repositories/tickets.repository");

const getTickets = async () => {
  return repo.getAllTickets();
};

const createTicket = async (data) => {
  if (!data.customer_name || !data.issue) {
    throw new Error("Customer name and issue required");
  }

  return repo.createTicket(data.customer_name, data.issue);
};

const updateTicket = async (id, status) => {
  const validStatuses = ["OPEN", "ASSIGNED", "RESOLVED", "CLOSED"];

  if (!validStatuses.includes(status)) {
    throw new Error("Invalid status");
  }

  return repo.updateTicket(id, status);
};

module.exports = {
  getTickets,
  createTicket,
  updateTicket,
};
