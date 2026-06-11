import { useEffect, useState } from "react";
import api from "../api/api";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);

  const fetchIncidents = () => {
    api.get("/incidents").then((res) => {
      setIncidents(res.data);
    });
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/incidents/${id}`, {
      status,
    });

    fetchIncidents();
  };

  return (
    <div>
      <h1>Incidents</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.title}</td>
              <td>{incident.assigned_to}</td>

              <td>
                <select
                  value={incident.status}
                  onChange={(e) =>
                    updateStatus(
                      incident.id,
                      e.target.value
                    )
                  }
                >
                  <option>OPEN</option>
                  <option>IN_PROGRESS</option>
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