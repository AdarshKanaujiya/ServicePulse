const db = require("../config/db");

const getAllTickets = async () => {
  const result = await db.query(`
    SELECT *
    FROM tickets
    ORDER BY created_at DESC
  `);

  return result.rows;
};

const createTicket = async (customerName, issue) => {
  const result = await db.query(
    `
    INSERT INTO tickets(
      customer_name,
      issue
    )
    VALUES($1,$2)
    RETURNING *
    `,
    [customerName, issue],
  );

  return result.rows[0];
};

const updateTicket = async (id, status) => {
  const result = await db.query(
    `
    UPDATE tickets
    SET status=$1
    WHERE id=$2
    RETURNING *
    `,
    [status, id],
  );

  return result.rows[0];
};

module.exports = {
  getAllTickets,
  createTicket,
  updateTicket,
};
