import axios from "axios";

import keycloak from "./keycloak";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    return await requestWithToken(config);
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      console.log("Unauth")
      try {
        await keycloak.updateToken(5);
        return await requestWithToken(config);
      } catch (error: any) {
        // Log out the user or handle the error as needed
        console.error("Failed to update token:", error);
        keycloak.logout();
      }
    } else {
      throw error;
    }
  }
});

async function requestWithToken(config: any) {
  const token = keycloak.token;

  if (token) {
    console.log("hellooo")
    console.log(keycloak.token)
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

export default axiosInstance;
