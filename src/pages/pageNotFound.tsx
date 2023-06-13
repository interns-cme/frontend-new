import React from "react";
import { Box, Typography } from "@mui/material";

const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f0f8",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Arial, sans-serif",
          color: "#7f2c8e",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Arial, sans-serif",
          color: "#7f2c8e",
          marginTop: "20px",
        }}
      >
        Page not found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
