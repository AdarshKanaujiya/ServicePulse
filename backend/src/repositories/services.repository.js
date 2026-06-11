const db = require("../config/db");

const getAllServices = async () => {
  const result = await db.query(
    "SELECT * FROM services ORDER BY id"
  );

  return result.rows;
};

const createService = async (name, status) => {
  const result = await db.query(
    `
    INSERT INTO services(name,status)
    VALUES($1,$2)
    RETURNING *
    `,
    [name, status]
  );

  return result.rows[0];
};

const updateService = async (
  id,
  status
) => {
  const result = await db.query(
    `
    UPDATE services
    SET status=$1
    WHERE id=$2
    RETURNING *
    `,
    [status, id]
  );

  return result.rows[0];
};

module.exports = {
  getAllServices,
  createService,
  updateService,
};