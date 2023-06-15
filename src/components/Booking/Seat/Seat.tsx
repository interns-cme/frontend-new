import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SeatProps } from "../../../models/ISeat.model";

const Seat: React.FC<SeatProps> = ({ status, seat_id }) => {
  const [reserved, setReserved] = useState(status);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [userReserved, setUserReserved] = useState(false);
  const handleClick = () => {
    const hasBooked = localStorage.getItem("hasBooked");
    if (reserved) {
      window.alert("Seat Already Reserved.");
    } else if (hasBooked !== "true" && !userReserved) {
      window.alert("Already Reserved a Seat for Today.");
    } else {
      if (userReserved) {
        // Seat is already reserved, unreserve it
        setUserReserved(false);
        localStorage.setItem("hasBooked", JSON.stringify(true));
      } else {
        // Seat is not reserved, reserve it
        localStorage.setItem("hasBooked", JSON.stringify({ seat_id }));
        setUserReserved(true);
        setShowSnackbar(true);
      }
    }
    console.log(hasBooked);
  };

  const handleUndo = () => {
    setShowSnackbar(false);
    setUserReserved(false);
    localStorage.setItem("hasBooked", JSON.stringify(true));
  };

  let seatColor = "green"; // Default color for unreserved seats

  useEffect(() => {
    const hasBooked = localStorage.getItem("hasBooked");
    if (hasBooked === JSON.stringify({ seat_id })) {
      setUserReserved(true);
    }
  }, []);

  if (reserved) {
    seatColor = "red"; // Color for reserved seats
  } else if (userReserved) {
    seatColor = "blue"; // Color for seats reserved by the user
  }

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: seatColor, // Use dynamic seat color
          width: "20px",
          height: "20px",
          m: 1,
          borderRadius: "20px 20px 0 0",
          cursor: "pointer",
        }}
        onClick={handleClick}
      ></Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {reserved
            ? "Seat reserved successfully!"
            : "Seat unreserved successfully!"}
          <Button color="inherit" size="small" onClick={handleUndo}>
            Undo
          </Button>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Seat;
