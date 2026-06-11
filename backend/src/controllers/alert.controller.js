const service = require("../services/alert.service");

const getAlerts = async (req, res) => {
  try {
    const alerts = await service.getAlerts();

    res.json(alerts);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateAlertStatus = async (req, res) => {
  try {
    const alert = await service.updateAlertStatus(
      req.params.id,
      req.body.status,
    );

    res.json(alert);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAlerts,
  updateAlertStatus,
};
