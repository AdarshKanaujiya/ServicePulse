const repo = require(
  "../repositories/services.repository"
);

const getServices = async () => {
  return repo.getAllServices();
};

const createService = async (data) => {
  return repo.createService(
    data.name,
    data.status || "UP"
  );
};

const updateService = async (
  id,
  status
) => {
  return repo.updateService(id, status);
};

module.exports = {
  getServices,
  createService,
  updateService,
};