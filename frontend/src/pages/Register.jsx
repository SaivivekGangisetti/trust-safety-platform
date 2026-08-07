import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "BUYER",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(form);

    // Spring Boot API comes later
    alert("Register API Coming Soon");
  };

  return (
    <AuthLayout title="Register">

      <form onSubmit={handleRegister} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

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

        <select
          name="role"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        >
          <option value="BUYER">Buyer</option>
          <option value="SELLER">Seller</option>
        </select>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Register
        </button>

      </form>

    </AuthLayout>
  );
}

export default Register;