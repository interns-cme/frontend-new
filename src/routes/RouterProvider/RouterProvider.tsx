import { Route, Routes } from "react-router-dom";
import Shell from "../../components/Shell/Shell";
import { userRoutes, adminRoutes } from "./routes";
import { useKeycloak } from "@react-keycloak-fork/web";
import NotFound404 from "../../components/NotFound404/NotFound404";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Container from "@mui/material/Container";

function RouterProvider() {
  const { keycloak } = useKeycloak();
  const [loading, setLoading] = useState(true);
  const isAdmin = keycloak.resourceAccess?.backend?.roles.includes("admin");

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    checkAuthentication();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container maxWidth={false}>
      <Routes>
        <Route path="/" element={<Shell />}>
          {isAdmin
            ? adminRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))
            : userRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    keycloak.authenticated ? (
                      <route.component />
                    ) : (
                      <NotFound404 />
                    )
                  }
                />
              ))}
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default RouterProvider;
