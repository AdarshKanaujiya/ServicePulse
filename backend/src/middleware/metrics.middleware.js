const {
  httpRequestsTotal,
  httpRequestDuration,
} = require("../metrics/prometheus");

const metricsMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    httpRequestsTotal.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode,
    });

    httpRequestDuration.observe(
      {
        method: req.method,
        route: req.path,
      },
      duration,
    );
  });

  next();
};

module.exports = metricsMiddleware;
