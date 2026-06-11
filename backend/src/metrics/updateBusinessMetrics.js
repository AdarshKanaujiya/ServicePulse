const db = require("../config/db");

const {
  activeAlerts,
  openIncidents,
  openTickets,
} = require("./businessMetrics");

const updateMetrics = async () => {
  try {
    const alerts = await db.query(`
      SELECT COUNT(*) count
      FROM alerts
      WHERE status='ACTIVE'
    `);

    const incidents = await db.query(`
      SELECT COUNT(*) count
      FROM incidents
      WHERE status='OPEN'
         OR status='IN_PROGRESS'
    `);

    const tickets = await db.query(`
      SELECT COUNT(*) count
      FROM tickets
      WHERE status!='CLOSED'
    `);

    activeAlerts.set(Number(alerts.rows[0].count));
    console.log("alerts",alerts.rows[0].count);

    openIncidents.set(Number(incidents.rows[0].count));
    console.log("incidents",incidents.rows[0].count);

    openTickets.set(Number(tickets.rows[0].count));
    console.log("tickets",tickets.rows[0].count);
    
  } catch (err) {
    console.error(err);
  }
};

module.exports = updateMetrics;
