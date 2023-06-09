import Keycloak from "keycloak-js";

const initOptions = {
  url: process.env.KEYCLOAK_URL || "",
  realm: process.env.KEYCLOAK_REALM || "",
  clientId: "" + process.env.KEYCLOAK_CLIENT_ID,
  onLoad: "login-required",
  KeycloakResponseType: "code",
};

const keycloak = new Keycloak(initOptions);

export default keycloak;
