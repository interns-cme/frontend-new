import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Shell from "../../components/shell/Shell";
import { userRoutes, adminRoutes } from "./routes";
import { useKeycloak } from "@react-keycloak-fork/web";
import NotFound404 from "../../components/not-found-404/NotFound404";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";
import Container from "@mui/material/Container";

function RouterProvider() {
  const { keycloak, initialized } = useKeycloak();
  const [loading, setLoading] = useState(true);
  const isAdmin = keycloak.resourceAccess?.backend?.roles.includes("admin");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (initialized && !loading && !keycloak.authenticated) {
      const isUserRoute = userRoutes.some(
        (route) => route.path === location.pathname
      );
      const isAdminRoute = adminRoutes.some(
        (route) => route.path === location.pathname
      );

      if (isUserRoute || isAdminRoute) {
        keycloak.login();
      }
    }
  }, [
    keycloak.authenticated,
    location.pathname,
    navigate,
    initialized,
    loading,
  ]);

  useEffect(() => {
    if (initialized) {
      setLoading(false);
    }
  }, [initialized]);

  if (!initialized || loading) {
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
