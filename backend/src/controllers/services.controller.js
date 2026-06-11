const service = require("../services/services.service");

const getServices = async (req, res) => {
  try {
    const data = await service.getServices();

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createService = async (req, res) => {
  try {
    const data = await service.createService(req.body);

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateService = async (req, res) => {
  try {
    const data = await service.updateService(req.params.id, req.body.status);

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getServices,
  createService,
  updateService,
};
