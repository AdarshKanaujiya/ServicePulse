const repo = require("../repositories/apiLog.repository");

const apiLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", async () => {
    const duration = Date.now() - start;

    try {
      await repo.createApiLog(
        req.originalUrl,
        req.method,
        res.statusCode,
        duration,
      );
    } catch (err) {
      console.error("API log error:", err.message);
    }
  });

  next();
};

module.exports = apiLogger;
