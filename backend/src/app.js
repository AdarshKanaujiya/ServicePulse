const express = require("express");
const cors = require("cors");
const servicesRoutes = require("./routes/services.routes");
const logsRoutes = require("./routes/logs.routes");
const alertRoutes = require("./routes/alert.routes");
const incidentsRoutes = require("./routes/incidents.routes");
const ticketsRoutes = require("./routes/tickets.routes");
const apiLogger = require("./middleware/apiLogger");

const analyticsRoutes = require("./routes/analytics.routes");
const metricsMiddleware = require("./middleware/metrics.middleware");
const { register } = require("./metrics/prometheus");

const app = express();

app.use(cors());
app.use(express.json());
app.use(metricsMiddleware);


app.use(apiLogger); //attach the API logger middleware

// Register routes
app.use("/api/services", servicesRoutes);
app.use("/api/logs", logsRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/incidents", incidentsRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/summary", analyticsRoutes);

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);

  res.end(await register.metrics());
});

module.exports = app;
