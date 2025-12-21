import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-semibold text-emerald-600">
        🌱 Mintly
        <p className="text-xs text-gray-400">Smart Expense Tracker</p>
      </h1>
      

      <div className="flex gap-6 items-center">
        <NavLink to="/dashboard" className="text-gray-600 hover:text-emerald-600">
          Dashboard
        </NavLink>
        <NavLink to="/income" className="text-gray-600 hover:text-emerald-600">
          Income
        </NavLink>
        <NavLink to="/expense" className="text-gray-600 hover:text-emerald-600">
          Expense
        </NavLink>

        <button
          onClick={logout}
          className="px-4 py-1 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;