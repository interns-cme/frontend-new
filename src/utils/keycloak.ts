import Keycloak from "keycloak-js";

//https://6af2-193-227-191-93.ngrok-free.app/auth

const initOptions = {
  url: import.meta.env.VITE_KEYCLOAK_URL || "",
  realm: import.meta.env.VITE_KEYCLOAK_REALM || "",
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID || "",
  onLoad: "login-required",
  responseType: "code",
};




const keycloak = Keycloak(initOptions);




export default keycloak;