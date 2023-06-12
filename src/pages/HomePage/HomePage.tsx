import { Box, Button, Card, CardMedia, Container, Paper } from "@mui/material";
import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const handleFloorClick = (floor: number) => {
    navigate(`/BookingPage/${floor}`);
  };
  return (
    <div className=".bg">
      <Container maxWidth={false}>
        <h1 style={{ color: "#7f2c8e" }}>Choose a Floor</h1>
        <Box
          display="flex"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            <CardMedia
              component="img"
              height="140"
              image="../../assets/Office.jpg"
            />
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
            <CardMedia
              component="img"
              height="140"
              image="../../assets/Office.jpg"
            />
            <h4>Available seats: 12/50</h4>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default HomePage;
