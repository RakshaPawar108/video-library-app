import axios from "axios";

export const logIn = (user) => {
  return axios.post("/api/auth/login", user);
};
