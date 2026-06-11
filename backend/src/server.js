require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

const updateMetrics = require("./metrics/updateBusinessMetrics");

updateMetrics();
// Update metrics every minute
setInterval(updateMetrics, 30000);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});