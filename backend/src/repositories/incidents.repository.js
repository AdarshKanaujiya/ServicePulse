const db = require("../config/db");

const getAllIncidents = async () => {
  const result = await db.query(`
    SELECT
      i.id,
      i.alert_id,
      i.title,
      i.description,
      i.status,
      i.assigned_to,
      i.created_at,

      a.message AS alert_message,
      a.severity,

      s.name AS service_name

    FROM incidents i

    JOIN alerts a
      ON i.alert_id = a.id

    JOIN services s
      ON a.service_id = s.id

    ORDER BY i.created_at DESC
  `);

  return result.rows;
};

const getIncidentById = async (id) => {
  const result = await db.query(
    `
    SELECT
      i.*,
      a.message AS alert_message,
      a.severity,
      s.name AS service_name

    FROM incidents i

    JOIN alerts a
      ON i.alert_id = a.id

    JOIN services s
      ON a.service_id = s.id

    WHERE i.id=$1
    `,
    [id],
  );

  return result.rows[0];
};

const createIncident = async (
  alertId,
  title,
  description,
  assignedTo = null
) => {

  console.log(
    "CREATE INCIDENT:",
    {
      alertId,
      title,
      description,
      assignedTo,
    }
  );

  const result = await db.query(
    `
    INSERT INTO incidents(
      alert_id,
      title,
      description,
      assigned_to,
      status
    )
    VALUES($1,$2,$3,$4,'OPEN')
    RETURNING *
    `,
    [
      alertId,
      title,
      description,
      assignedTo,
    ]
  );

  await db.query(
    `
    UPDATE alerts
    SET status='ACKNOWLEDGED'
    WHERE id=$1
    `,
    [alertId]
  );

  return result.rows[0];
};

const updateIncident = async (id, status, assignedTo) => {
  const result = await db.query(
    `
    UPDATE incidents
    SET
      status = COALESCE($1,status),
      assigned_to = COALESCE($2,assigned_to)
    WHERE id=$3
    RETURNING *
    `,
    [status, assignedTo, id],
  );

  const incident = result.rows[0];

  if (incident && incident.status === "RESOLVED") {
    await db.query(
      `
      UPDATE alerts
      SET status='RESOLVED'
      WHERE id=$1
      `,
      [incident.alert_id],
    );
  }

  return incident;
};

const deleteIncident = async (id) => {
  const result = await db.query(
    `
    DELETE FROM incidents
    WHERE id=$1
    RETURNING *
    `,
    [id],
  );

  return result.rows[0];
};

module.exports = {
  getAllIncidents,
  getIncidentById,
  createIncident,
  updateIncident,
  deleteIncident,
};
