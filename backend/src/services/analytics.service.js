const analyticRepo = require('../repositories/analytics.repository');


const getTopFailingServices = async () => {
  return analyticRepo.getTopFailingServices();
};

const getTopEndpoints = async () => {
  return analyticRepo.getTopEndpoints();
};

const getAvgLatency = async () => {
  return analyticRepo.getAvgLatency();
};

const getIncidentSummary = async () => {
  return analyticRepo.getIncidentSummary();
}

const summary = async () => {
  return analyticRepo.summary();
}

module.exports = {
    getTopFailingServices,
    getTopEndpoints,
    getAvgLatency,
    getIncidentSummary,
    summary
};