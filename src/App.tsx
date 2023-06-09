import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak-fork/web";
import keycloak from "./utils/keycloak";
import RouterProvider from "./routes/RouterProvider/RouterProvider";

function App() {
  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
