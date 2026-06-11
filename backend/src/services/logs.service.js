const repo = require("../repositories/logs.repository");

const getLogs = async () => {
  return repo.getAllLogs();
};

const createLog = async (data) => {
  const validLevels = ["INFO", "WARNING", "ERROR", "CRITICAL"];

  if (!validLevels.includes(data.log_level)) {
    throw new Error("Invalid log level");
  }

  return repo.createLog(data.service_id, data.log_level, data.message);
};

module.exports = {
  getLogs,
  createLog,
};
