const db = require("../config/db");

const createApiLog = async (endpoint, method, statusCode, responseTime) => {
  await db.query(
    `
    INSERT INTO api_logs(
      endpoint,
      method,
      status_code,
      response_time
    )
    VALUES($1,$2,$3,$4)
    `,
    [endpoint, method, statusCode, responseTime],
  );
};

module.exports = {
  createApiLog,
};
