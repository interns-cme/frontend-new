import { Route, Routes, Navigate } from "react-router-dom";
import Shell from "../../components/Shell/Shell";
import { routes } from "./routes";
import { useKeycloak } from "@react-keycloak-fork/web";

function RouterProvider() {
  const { keycloak } = useKeycloak();

  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              keycloak.authenticated ? (
                <route.component />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default RouterProvider;
