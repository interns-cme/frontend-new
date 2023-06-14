import {
  Alert,
  Box,
  Button,
  Popover,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SeatProps } from "../../../models/ISeat.model";

const Seat: React.FC<SeatProps> = ({ status }) => {
  const [reserved, setReserved] = useState(status);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = () => {
    if (reserved) {
      window.alert("Seat already reserved");
    } else {
      setReserved(true);
      setShowSnackbar(true);
    }
  };

  const handleUndo = () => {
    setShowSnackbar(false);
    setReserved(false);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        sx={{
          backgroundColor: reserved ? "red" : "green",
          width: "20px",
          height: "20px",
          m: 1,
          borderRadius: "20px 20px 0 0",
          cursor: "pointer",
        }}
        onClick={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
      ></Box>
      <Popover
        // sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        // onMouseEnter={handlePopoverOpen}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box sx={{ p: 2 }}>
          {reserved ? (
            <>
              <Typography>Reserved by: Admin</Typography>
              <Button color="inherit" size="small" onClick={handleUndo}>
                Unbook
              </Button>
            </>
          ) : (
            <>
              <Typography>Seat is available</Typography>
              <Button color="inherit" size="small" onClick={handleClick}>
                Reserve
              </Button>
            </>
          )}
          <Button color="inherit" size="small" onClick={handlePopoverClose}>
            Close
          </Button>
        </Box>
      </Popover>
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
