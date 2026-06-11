import { useEffect, useState } from "react";
import api from "../api/api";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  const fetchAlerts = () => {
    api.get("/alerts").then((res) => {
      setAlerts(res.data);
    });
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/alerts/${id}`, {
      status,
    });

    fetchAlerts();
  };

  return (
    <div>
      <h1>Alerts</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Service</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.service_name}</td>
              <td>{alert.severity}</td>
              <td>{alert.status}</td>

              <td>
                <select
                  value={alert.status}
                  onChange={(e) =>
                    updateStatus(
                      alert.id,
                      e.target.value
                    )
                  }
                >
                  <option>ACTIVE</option>
                  <option>ACKNOWLEDGED</option>
                  <option>RESOLVED</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}