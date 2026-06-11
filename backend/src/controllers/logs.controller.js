const service = require("../services/logs.service");

const getLogs = async (req, res) => {
  try {
    const logs = await service.getLogs();

    res.json(logs);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createLog = async (req, res) => {
  try {
    const log = await service.createLog(req.body);

    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getLogs,
  createLog,
};
