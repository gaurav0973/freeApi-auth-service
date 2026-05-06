import { Routes, Route, Navigate } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import { tokenStore } from "./services/tokenStore";

function App() {

  const token = tokenStore.getAccess();

  return (
    <Routes>

      <Route
        path="/"
        element={
          token
            ? <Navigate to="/home" />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/home"
        element={
          token
            ? <Home />
            : <Navigate to="/login" />
        }
      />

    </Routes>
  );
}

export default App;