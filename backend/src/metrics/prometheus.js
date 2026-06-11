const client = require("prom-client");

const register = new client.Registry();

client.collectDefaultMetrics({
  register,
});

const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP Requests",
  labelNames: ["method", "route", "status"],
});

const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_ms",
  help: "Request Duration",
  labelNames: ["method", "route"],
  buckets: [10, 50, 100, 200, 500, 1000],
});

register.registerMetric(httpRequestsTotal);

register.registerMetric(httpRequestDuration);

module.exports = {
  register,
  httpRequestsTotal,
  httpRequestDuration,
};
