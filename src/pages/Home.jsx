import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  getCurrentUser,
  logoutUser
} from "../services/authService";

import { tokenStore } from "../services/tokenStore";

const Home = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);




  useEffect(() => {

    fetchUser();

  }, []);




  async function fetchUser() {

    try {

      const response = await getCurrentUser();

      console.log(response);

      setUser(response);

    } catch (error) {

      console.log(error);

      tokenStore.clear();

      navigate("/login");
    }
  }




  async function handleLogout() {

    try {

      await logoutUser();

    } catch (error) {

      console.log(error);
    }

    tokenStore.clear();

    navigate("/login");
  }




  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-black text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          FreeAPI Auth
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="p-10">

        <h1 className="text-4xl font-bold">

          Welcome {user?.username} 👋

        </h1>

        <p className="mt-4 text-gray-600">
          You are successfully logged in.
        </p>

      </div>

    </div>
  );
};

export default Home;