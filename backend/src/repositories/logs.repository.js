const db = require("../config/db");

const getAllLogs = async () => {
  const result = await db.query(`
    SELECT
      l.*,
      s.name as service_name
    FROM logs l
    JOIN services s
      ON l.service_id = s.id
    ORDER BY l.timestamp DESC
  `);

  return result.rows;
};

const createLog = async (serviceId, logLevel, message) => {
  const result = await db.query(
    `
    INSERT INTO logs(
      service_id,
      log_level,
      message
    )
    VALUES($1,$2,$3)
    RETURNING *
    `,
    [serviceId, logLevel, message],
  );

  return result.rows[0];
};

module.exports = {
  getAllLogs,
  createLog,
};
