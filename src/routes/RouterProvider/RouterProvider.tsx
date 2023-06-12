import { Route, Routes } from "react-router-dom";
import Shell from "../../components/Shell/Shell";
import { routes } from "./routes";
import { useKeycloak } from "@react-keycloak-fork/web";
import NotFound404 from "../../components/NotFound404/NotFound404";

function RouterProvider() {
  const { keycloak } = useKeycloak();

  return (
    <>
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
                  <div>Checking Authentication...</div>
                )
              }
            />
          ))}
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouterProvider;
