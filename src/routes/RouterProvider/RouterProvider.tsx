import { Route, Routes } from "react-router-dom";
import Shell from "../../components/Shell/Shell";
import { routes } from "./routes";
import { useKeycloak } from "@react-keycloak-fork/web";
import NotFound404 from "../../components/NotFound404/NotFound404";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

function RouterProvider() {
  const { keycloak } = useKeycloak();
  const [loading, setLoading] = useState(true);

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
    <>
      <Routes>
        <Route path="/" element={<Shell />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                keycloak.authenticated ? <route.component /> : <NotFound404 />
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
