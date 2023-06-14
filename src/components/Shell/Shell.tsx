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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminHome from "../../pages/AdminHome/AdminHome";
import Testimage from "../../assets/BG-Testimage.jpg";
import Office from "../../assets/Office.jpg";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Box,
  CardMedia,
  Paper,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

function Shell() {
  const handleFloorClick = (floor: number) => {
    navigate(`/booking/${floor}`);
  };
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const [anchorEl, setAnchorEl] = useState(null);
  const { keycloak } = useKeycloak();
  const api = axios.create({
    baseURL: "https://6af2-193-227-191-93.ngrok-free.app/auth",
  });

  api.interceptors.request.use(
    (config) => {
      if (keycloak.authenticated) {
        console.log("authenticated");
        config.headers.Authorization = keycloak.token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const [currentUser, setCurrentUser] = useState<KeyCloakToken | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(
    keycloak.resourceAccess?.backend?.roles.includes("admin")
  );

  useEffect(() => {
    if (keycloak.authenticated !== false) {
      setCurrentUser({
        idToken: keycloak.idToken,
        refreshToken: keycloak.refreshToken,
        token: keycloak.token,
      });
      localStorage.setItem("currentUser", "true");
    } else {
      setCurrentUser(null);
    }
    setIsAdmin(keycloak.resourceAccess?.backend?.roles.includes("admin"));
  }, [keycloak.authenticated]);

  function handleLogout() {
    setCurrentUser(null);
    navigate("/");
    keycloak.logout();
    setAnchorEl(null);
  }

  function handleLogin() {
    keycloak.login();
  }

  const handleAvatarClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const userLoggedInMenuItems = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },
    {
      title: "Book",
      url: "/booking/7",
      cName: "nav-links",
    },

    {
      title: "My Bookings",
      url: "/my-bookings",
      cName: "nav-links",
    },
  ];

  const adminLoggedInMenuItems = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },
    {
      title: "Statistics",
      url: "/admin-statistics",
      cName: "nav-links",
    },

    {
      title: "History",
      url: "/admin-history",
      cName: "nav-links",
    },

    {
      title: "Reservations",
      url: "/admin-bookings",
      cName: "nav-links",
    },

    {
      title: "Edit Floor",
      url: "/admin-floor/7",
      cName: "nav-links",
    },
  ];

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#7f2c8e" }}>
        <Toolbar>
          {currentUser ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ mr: 0 }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Button
              sx={{
                display: "none",
              }}
            ></Button>
          )}

          <Typography variant="h5" component="div" sx={{ flex: 1 }}>
            CME Seat Booking
          </Typography>
          {currentUser ? (
            <div>
              <IconButton
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={handleAvatarClick}
                color="inherit"
              >
                <Avatar
                  sx={{
                    backgroundColor: "#4894c1",
                    "&:hover": {
                      transition: "all 0.2s ease-out",
                      backgroundColor: "#4894c1",
                      color: "#f5f0f8",
                    },

                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  {currentUser.idToken &&
                  keycloak.idTokenParsed !== undefined ? (
                    keycloak.idTokenParsed.preferred_username
                      .charAt(0)
                      .toUpperCase()
                  ) : (
                    <p></p>
                  )}
                </Avatar>
                <ArrowDropDownIcon
                  sx={{
                    backgroundColor: "#7f2c8e",

                    "&:focus": {
                      outline: "none",
                    },
                  }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              sx={{
                display: "none",
              }}
            ></Button>
          )}
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
          {currentUser ? (
            isAdmin ? (
              adminLoggedInMenuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={NavLink}
                  to={item.url}
                  className={item.cName}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))
            ) : (
              userLoggedInMenuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={NavLink}
                  to={item.url}
                  className={item.cName}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))
            )
          ) : (
            <p></p>
          )}
        </List>
      </Drawer>
      {isAdmin && location.pathname === "/" ? (
        <AdminHome />
      ) : location.pathname === "/" ? (
        <div
          style={
            {
              // textAlign: "left",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "flex-start",
            }
          }
        >
          <h1 style={{ color: "#7f2c8e" }}>
            Welcome to our Office Seat Reservation website!
          </h1>
          <h2 style={{ color: "#7f2c8e" }}>
            Here, you can easily reserve seats at our company office and enjoy a
            comfortable and productive work environment. Take control of your
            seating preferences and secure your spot with just a few clicks.
            Start reserving your ideal seat today and enhance your office
            experience!
          </h2>
          {!currentUser && !keycloak.authenticated ? (
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
                "&:hover": {
                  transition: "all 0.3s ease-out",
                  backgroundColor: "#4894c1",
                  color: "#f5f0f8",
                },
              }}
              color="inherit"
              onClick={handleLogin}
            >
              {!keycloak.authenticated ? "Log In" : ""}
            </Button>
          ) : (
            <Box
              display="flex"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "400px",
              }}
            >
              <Paper
                sx={{
                  width: "250px",
                  height: "250px",
                  backgroundColor: "#f5f0f8",
                  borderRadius: "0 0 50% 50% / 20% 20% 0 0",
                  padding: "16px",
                  m: 1,
                  cursor: "pointer",
                  marginRight: "30px",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease-out",
                  },
                }}
                onClick={() => handleFloorClick(7)}
              >
                <h3>Floor 7</h3>
                <CardMedia component="img" height="140" image={Testimage} />
                <h4>Available seats: 25/30</h4>
              </Paper>
              <Paper
                sx={{
                  width: "250px",
                  height: "250px",
                  backgroundColor: "#f5f0f8",
                  borderRadius: "0 0 50% 50% / 20% 20% 0 0",
                  padding: "16px",
                  m: 1,
                  cursor: "pointer",
                  marginLeft: "10px",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease-out",
                  },
                }}
                onClick={() => handleFloorClick(8)}
              >
                <h3>Floor 8</h3>
                <CardMedia component="img" height="140" image={Office} />
                <h4>Available seats: 12/50</h4>
              </Paper>
            </Box>
          )}
        </div>
      ) : null}

      <Outlet />
    </div>
  );
}

export default Shell;
