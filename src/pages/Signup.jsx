import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { registerUser } from "../services/authService";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "ADMIN",
  });




  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }




  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const response = await registerUser(formData);

      console.log(response);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error.response.data);

      alert("Registration Failed");
    }
  }




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">

        <h1 className="text-3xl font-bold mb-6">
          Signup
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Signup
          </button>

        </form>

        <p className="mt-4 text-center text-sm">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-500 ml-1"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Signup;