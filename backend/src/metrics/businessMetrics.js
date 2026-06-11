const client = require("prom-client");
const { register } = require("./prometheus");

const activeAlerts = new client.Gauge({
  name: "active_alerts",
  help: "Current Active Alerts",
  registers: [register],
});

const openIncidents = new client.Gauge({
  name: "open_incidents",
  help: "Current Open Incidents",
  registers: [register],
});

const openTickets = new client.Gauge({
  name: "open_tickets",
  help: "Current Open Tickets",
  registers: [register],
});

module.exports = {
  activeAlerts,
  openIncidents,
  openTickets,
};