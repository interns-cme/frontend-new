import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak-fork/web";
import keycloak from "./utils/keycloak";
import RouterProvider from "./routes/RouterProvider/RouterProvider";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth={false}>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
      </ReactKeycloakProvider>
    </Container>
  );
}

export default App;
