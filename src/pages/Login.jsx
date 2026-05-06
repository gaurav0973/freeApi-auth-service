import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { loginUser } from "../services/authService";
import { tokenStore } from "../services/tokenStore";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

      const response = await loginUser(formData);

      console.log(response);

      tokenStore.set({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        user: response.user,
      });

      alert("Login Successful");

      navigate("/home");

    } catch (error) {

      console.log(error.response.data);

      alert("Login Failed");
    }
  }




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">

        <h1 className="text-3xl font-bold mb-6">
          Login
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
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <p className="mt-4 text-center text-sm">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-500 ml-1"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;