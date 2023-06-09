import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7f2c8e",
    },
    secondary: {
      main: "#f5f0f8",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "5px",
          width: "100%",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "250px",
          height: "250px",
          backgroundColor: "#f5f0f8",
          borderRadius: "0 0 50% 50% / 20% 20% 0 0",
          padding: "16px",
          m: 1,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": { outline: "none" },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": { outline: "none" },
          width: "100%",
          "&:hover": {
            transition: "all 0.3s ease-out",
            background: "#4894c1",
            color: "#f5f0f8",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
