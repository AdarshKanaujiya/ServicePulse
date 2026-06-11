const db = require("../config/db");

const getAlerts = async () => {
  const result = await db.query(`
    SELECT
      a.*,
      s.name AS service_name
    FROM alerts a
    JOIN services s
      ON s.id = a.service_id
    ORDER BY a.created_at DESC
  `);

  return result.rows;
};

const updateAlertStatus = async (id, status) => {
  const result = await db.query(
    `
    UPDATE alerts
    SET status = $1
    WHERE id = $2
    RETURNING *
    `,
    [status, id],
  );

  return result.rows[0];
};

module.exports = {
  getAlerts,
  updateAlertStatus,
};
