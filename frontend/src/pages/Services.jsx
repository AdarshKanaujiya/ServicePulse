import { useEffect, useState } from "react";
import api from "../api/api";

function Services() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await api.get("/services");
    setServices(res.data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/services/${id}`, {
      status,
    });

    fetchServices();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Services</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>

              <td>{service.status}</td>

              <td>
                <select
                  value={service.status}
                  onChange={(e) =>
                    updateStatus(
                      service.id,
                      e.target.value
                    )
                  }
                >
                  <option>UP</option>
                  <option>DOWN</option>
                  <option>DEGRADED</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;