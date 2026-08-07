import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ minHeight: "100vh", width: "250px" }}
    >
      <h3 className="mb-4">Admin</h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/admin">
            📊 Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/products">
            📦 Products
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/fraud">
            🚨 Fraud Detection
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/reviews">
            ⭐ Fake Reviews
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/counterfeit">
            🛡 Counterfeit
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;