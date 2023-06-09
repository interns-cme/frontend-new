import { useEffect, useState } from "react";
import "./Shell.css";
import { useKeycloak } from "@react-keycloak-fork/web";
import { KeyCloakToken } from "../../models/IKeyCloakToken";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

function Shell() {
  const { keycloak } = useKeycloak();
  const api = axios.create({
    baseURL: "http://localhost:8080", // Backend API URL
  });

  api.interceptors.request.use(
    (config) => {
      if (keycloak.authenticated) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const [currentUser, setCurrentUser] = useState<KeyCloakToken | null>({
    idToken: "3",
    refreshToken: "hi",
    token: "there",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(keycloak);

    if (keycloak.authenticated !== undefined && keycloak.tokenParsed) {
      setCurrentUser({
        idToken: keycloak.tokenParsed.sub || "",
        refreshToken: keycloak.tokenParsed.username,
        token: keycloak.tokenParsed.password,
      });
    } else {
      setCurrentUser(null);
    }
  }, []);

  function handleLogout() {
    keycloak.logout();
  }

  function handleLogin() {
    keycloak.login();
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const loggedInMenuItems = [
    {
      title: "Home",
      url: "/home",
      cName: "nav-links",
    },
    {
      title: "Book a Seat",
      url: "/book",
      cName: "nav-links",
    },
    {
      title: "My Bookings",
      url: "/myBookings",
      cName: "nav-links",
    },
  ];

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#7f2c8e" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ mr: 0 }} // Add margin to push the IconButton to the right
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flex: 1 }}>
            CME Seat Booking
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
        onClick={toggleMenu}
        sx={{
          width: "250px", // Adjust the width to increase the size
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px", // Adjust the width to increase the size
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {loggedInMenuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={NavLink}
              to={item.url}
              className={item.cName}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
          {!currentUser ? (
            <Button
              sx={{
                backgroundColor: "#f5f0f8",
                color: "#7f2c8e",
                height: 38,
                width: 140,
                textDecoration: "none",
                fontSize: "1.1em",
                fontWeight: 650,
                padding: "7px 18px",
                borderRadius: 4,
                outline: "none",
                border: "none",
                cursor: "pointer",
                marginTop: 1,
                marginLeft: 0,
                "&:hover": {
                  transition: "all 0.3s ease-out",
                  backgroundColor: "#4894c1",
                  color: "#f5f0f8",
                },
              }}
              color="inherit"
              onClick={handleLogin}
            >
              Log In
            </Button>
          ) : (
            <Button
              sx={{
                backgroundColor: "#f5f0f8",
                color: "#7f2c8e",
                height: 38,
                width: 140,
                textDecoration: "none",
                fontSize: "1.1em",
                fontWeight: 650,
                padding: "7px 18px",
                borderRadius: 4,
                outline: "none",
                border: "none",
                cursor: "pointer",
                marginTop: 1,
                marginRight: 0,
                "&:hover": {
                  transition: "all 0.3s ease-out",
                  backgroundColor: "#4894c1",
                  color: "#f5f0f8",
                },
              }}
              color="inherit"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          )}
        </List>
      </Drawer>
      <Outlet />
    </div>
  );
}

export default Shell;
