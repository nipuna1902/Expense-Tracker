import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    // TEMP: simulate successful signup
    localStorage.setItem("token", "dummy-token");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-emerald-600 mb-2">
          Join Mintly 🌿
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Build better monry habits
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;