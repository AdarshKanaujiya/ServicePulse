const repo = require("../repositories/incidents.repository");

const getIncidents = async () => {
  return repo.getAllIncidents();
};

const getIncidentById = async (id) => {
  return repo.getIncidentById(id);
};

const createIncident = async (
  alertId,
  title,
  description,
  assignedTo
) => {
  return repo.createIncident(
    alertId,
    title,
    description,
    assignedTo
  );
};

const updateIncident = async (
  id,
  status,
  assignedTo
) => {
  const allowedStatuses = [
    "OPEN",
    "IN_PROGRESS",
    "RESOLVED",
  ];

  if (
    status &&
    !allowedStatuses.includes(status)
  ) {
    throw new Error("Invalid incident status");
  }

  return repo.updateIncident(
    id,
    status,
    assignedTo
  );
};

const deleteIncident = async (id) => {
  return repo.deleteIncident(id);
};

module.exports = {
  getIncidents,
  getIncidentById,
  createIncident,
  updateIncident,
  deleteIncident,
};