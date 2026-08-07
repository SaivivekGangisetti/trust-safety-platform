import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);

    // Spring Boot API comes later
    alert("Login API Coming Soon");
  };

  return (
    <AuthLayout title="Login">

      <form onSubmit={handleLogin} className="space-y-5">

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <button
          className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600"
        >
          Login
        </button>

      </form>

    </AuthLayout>
  );
}

export default Login;