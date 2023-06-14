// import axios from "axios";
// import keycloak from "./keycloak";

// const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(async (config) => {
//   await keycloak.updateToken(5);
//   const token = keycloak.token;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default axiosInstance;
