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
        <h2 style={{ color: "#7f2c8e" }}>
          Welcome to our Office Seat Reservation website! Here, you can easily
          reserve seats at our company office and enjoy a comfortable and
          productive work environment. Take control of your seating preferences
          and secure your spot with just a few clicks. Start reserving your
          ideal seat today and enhance your office experience!
        </h2>
        <Button
          sx={{
            background: "#f5f0f8",
            color: "#7f2c8e",
            width: "100px",
            p: "4px",
            m: 1,
          }}
        >
          <h4>Book Now</h4>
        </Button>
        <Box
          display="flex"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            overflow: "auto",
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
              marginRight: "10px",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "all 0.3s ease-out",
                marginRight: "50px",
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
                marginLeft: "50px",
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
