import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: simulate login success
    localStorage.setItem("token", "dummy-token");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-emerald-600 mb-2">
          Welcome to Mintly 🌱
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Track your money the smart way
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-emerald-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
