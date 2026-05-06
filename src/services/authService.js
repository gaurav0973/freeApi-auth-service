import api from "./api";




// REGISTER USER
export const registerUser = async (userData) => {

  const response = await api.post(
    "/users/register",
    userData
  );

  return response.data.data;
};




// LOGIN USER
export const loginUser = async (userData) => {

  const response = await api.post(
    "/users/login",
    userData
  );

  return response.data.data;
};




// GET CURRENT USER
export const getCurrentUser = async () => {

  const response = await api.get(
    "/users/current-user"
  );

  return response.data.data;
};




// LOGOUT USER
export const logoutUser = async () => {

  const response = await api.post(
    "/users/logout"
  );

  return response.data.data;
};