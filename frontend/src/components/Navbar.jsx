import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link to="/">Dashboard</Link>
      <Link to="/services">Services</Link>
      <Link to="/logs">Logs</Link>
      <Link to="/alerts">Alerts</Link>
      <Link to="/incidents">Incidents</Link>
    </nav>
  );
}

export default Navbar;