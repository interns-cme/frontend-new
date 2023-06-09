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
import { Link, useLocation } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

function Shell() {
  const location = useLocation();
  console.log(location.pathname);
  const [anchorEl, setAnchorEl] = useState(null);
  const { keycloak } = useKeycloak();
  const api = axios.create({
    baseURL: "https://8c12-193-227-191-93.ngrok-free.app/auth",
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

  useEffect(() => {
    console.log(keycloak);
    if (keycloak.authenticated !== false) {
      setCurrentUser({
        idToken: keycloak.idToken,
        refreshToken: keycloak.refreshToken,
        token: keycloak.token,
      });
    } else {
      setCurrentUser(null);
    }
    console.log(currentUser);
  }, [keycloak.authenticated]);

  function handleLogout() {
    setCurrentUser(null);
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

  const loggedInMenuItems = [
    {
      title: "Home",
      url: "/home",
      cName: "nav-links",
    },
    {
      title: "Book a Seat",
      url: "/bookingPage/7",
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
            loggedInMenuItems.map((item, index) => (
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
            <p></p>
          )}
        </List>
      </Drawer>
      {location.pathname === "/" ? (
        <div>
          <h2 style={{ color: "#7f2c8e" }}>
            Welcome to our Office Seat Reservation website! Here, you can easily
            reserve seats at our company office and enjoy a comfortable and
            productive work environment. Take control of your seating
            preferences and secure your spot with just a few clicks. Start
            reserving your ideal seat today and enhance your office experience!
          </h2>
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
            <Link to={"/home"}>
              <Button
                sx={{
                  background: "#f5f0f8",
                  color: "#7f2c8e",
                  width: "9em",
                  p: "4px",
                  m: 1,
                  fontWeight: 650,
                  fontSize: "1.2em",
                  "&:hover": {
                    transition: "all 0.3s ease-out",
                    backgroundColor: "#4894c1",
                    color: "#f5f0f8",
                  },
                }}
              >
                BOOK NOW!
              </Button>
            </Link>
          )}
        </div>
      ) : null}

      <Outlet />
    </div>
  );
}

export default Shell;
