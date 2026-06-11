import { useEffect, useState } from "react";
import api from "../api/api";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [data, setData] = useState({
    services: 0,
    alerts: 0,
    incidents: 0,
    tickets: 0,
  });

  useEffect(() => {
    api.get("/summary/summary")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ServicePulse Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <StatCard
          title="Total Services"
          value={data.services}
        />

        <StatCard
          title="Active Alerts"
          value={data.alerts}
        />

        <StatCard
          title="Open Incidents"
          value={data.incidents}
        />

        <StatCard
          title="Open Tickets"
          value={data.tickets}
        />
      </div>
    </div>
  );
}

export default Dashboard;