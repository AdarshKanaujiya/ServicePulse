const db = require("../config/db");

// API #1: Most failing services based on ERROR logs
const getTopFailingServices = async () => {
  const query = `
    SELECT s.name, COUNT(*) as total_errors
    FROM logs l
    JOIN services s ON s.id = l.service_id
    WHERE l.log_level = 'ERROR'
    GROUP BY s.name
    ORDER BY total_errors DESC;
  `;
  const result = await db.query(query);
  return result.rows;
};

// API #2: Most heavily trafficked/failing endpoints
const getTopEndpoints = async () => {
  const query = `
    SELECT endpoint, COUNT(*) as total_hits
    FROM api_logs
    GROUP BY endpoint
    ORDER BY total_hits DESC;
  `;
  const result = await db.query(query);
  return result.rows;
};

// API #3: Average network latency grouped by route
const getAvgLatency = async () => {
  const query = `
    SELECT endpoint, ROUND(AVG(response_time), 2) AS avg_response_time
    FROM api_logs
    GROUP BY endpoint;
  `;
  const result = await db.query(query);
  return result.rows;
};

// API #4: Total summary breakdown of incidents by status
const getIncidentSummary = async () => {
  const query = `
    SELECT status, COUNT(*) as total
    FROM incidents
    GROUP BY status;
  `;
  const result = await db.query(query);
  return result.rows;
};

const summary = async () => {
  const result = await db.query(`
    SELECT
      (SELECT COUNT(*) FROM services)  AS services,
      (SELECT COUNT(*) FROM alerts)    AS alerts,
      (SELECT COUNT(*) FROM incidents) AS incidents,
      (SELECT COUNT(*) FROM tickets)   AS tickets,
      (SELECT COUNT(*) FROM logs)      AS logs
  `);

  const row = result.rows[0];

  return {
    services: Number(row.services),
    alerts: Number(row.alerts),
    incidents: Number(row.incidents),
    tickets: Number(row.tickets),
    logs: Number(row.logs)
  };
};


module.exports = {
  getTopFailingServices,
  getTopEndpoints,
  getAvgLatency,
  getIncidentSummary,
  summary
};
