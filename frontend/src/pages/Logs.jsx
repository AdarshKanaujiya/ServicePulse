import { useEffect, useState } from "react";
import api from "../api/api";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get("/logs").then((res) => {
      setLogs(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Logs</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Service</th>
            <th>Level</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.service_name}</td>
              <td>{log.log_level}</td>
              <td>{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}