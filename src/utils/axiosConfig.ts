import axios from "axios";

import keycloak from "./keycloak";

const axiosInstance = axios.create({
  baseURL: "https://ba0b-193-227-191-93.ngrok-free.app",

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  await keycloak.updateToken(5);

  const token = keycloak.token;
console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
