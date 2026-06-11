const incidentService = require("../services/incidents.service");

const getIncidents = async (req, res) => {
  try {
    const incidents =
      await incidentService.getIncidents();

    res.json(incidents);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch incidents",
    });
  }
};

const getIncident = async (req, res) => {
  try {
    const incident =
      await incidentService.getIncidentById(
        req.params.id
      );

    if (!incident) {
      return res.status(404).json({
        message: "Incident not found",
      });
    }

    res.json(incident);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch incident",
    });
  }
};

const createIncident = async (req, res) => {
  try {
    const {
      alertId,
      title,
      description,
      assignedTo,
    } = req.body;

    const incident =
      await incidentService.createIncident(
        alertId,
        title,
        description,
        assignedTo
      );

    res.status(201).json(incident);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create incident",
    });
  }
};

const updateIncident = async (req, res) => {
  try {
    const { status, assignedTo } =
      req.body;

    const incident =
      await incidentService.updateIncident(
        req.params.id,
        status,
        assignedTo
      );

    res.json(incident);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update incident",
    });
  }
};

const deleteIncident = async (req, res) => {
  try {
    const incident =
      await incidentService.deleteIncident(
        req.params.id
      );

    res.json(incident);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete incident",
    });
  }
};

module.exports = {
  getIncidents,
  getIncident,
  createIncident,
  updateIncident,
  deleteIncident,
};