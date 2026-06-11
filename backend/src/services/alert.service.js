const repo = require("../repositories/alert.repository");

const getAlerts = async () => {
  return repo.getAlerts();
};

const updateAlertStatus = async (id, status) => {
  const allowed = ["ACTIVE", "ACKNOWLEDGED", "RESOLVED"];

  if (!allowed.includes(status)) {
    throw new Error("Invalid status");
  }

  return repo.updateAlertStatus(id, status);
};

module.exports = {
  getAlerts,
  updateAlertStatus,
};
