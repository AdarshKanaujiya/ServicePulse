const service = require("../services/analytics.service");

const topFailingServices = async (req, res) => {
  try {
    const analytics = await service.getTopFailingServices();
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopEndpoints = async (req, res) => {
  try {
    const endpoints = await service.getTopEndpoints();
    res.json(endpoints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAvgLatency = async (req, res) => {
  try {
    const latency = await service.getAvgLatency();
    res.json(latency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getIncidentSummary = async (req, res) => {
  try {
    const summary = await service.getIncidentSummary();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const summary = async (req, res) => {
  try {
    const summaryData = await service.summary();
    res.json(summaryData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  topFailingServices,
  getTopEndpoints,
  getAvgLatency,
  getIncidentSummary,
    summary
};
