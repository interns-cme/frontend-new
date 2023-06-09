import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { SeatProps } from "../../../models/ISeat.model";

const Seat: React.FC<SeatProps> = ({ status }) => {
  const [reserved, setstatus] = useState(status);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClick = () => {
    if (reserved === true) window.alert("Seat already reserved");
    else {
      setstatus(!reserved);
      setShowSnackbar(true);
    }
  };
  const handleUndo = () => {
    setShowSnackbar(false);
    setstatus(false);
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: reserved ? "red" : "green",
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
          Seat reserved successfully!
          <Button color="inherit" size="small" onClick={handleUndo}>
            Undo
          </Button>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Seat;
