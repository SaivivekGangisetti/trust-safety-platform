import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <FaShieldAlt className="text-3xl text-cyan-400" />
          <h1 className="text-2xl font-bold">
            Trust & Safety
          </h1>
        </div>

        <div className="flex gap-8 items-center">

          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/login" className="hover:text-cyan-400">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;