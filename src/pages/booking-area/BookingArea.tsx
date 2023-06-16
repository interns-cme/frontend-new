import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Table from "../../components/Booking/Table/Table";
import Seat from "../../components/Booking/Seat/Seat";
import Floor from "../../components/Booking/Floor/Floor";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingArea.css";

const BookingArea: React.FC = () => {
  const { floor } = useParams();
  console.log(floor);
  const [selectedFloor, setSelectedFloor] = useState("7");
  const navigate = useNavigate();
  const handleFloorClick = (floor: string) => {
    navigate(`/booking/${floor}`);
  };
  useEffect(() => {
    if (floor && (floor === "7" || floor === "8")) {
      setSelectedFloor(floor);
    } else {
      navigate("/404");
    }
  }, [floor, navigate]);
  const handleFloorChange = (event: SelectChangeEvent<string>) => {
    setSelectedFloor(event.target.value);
    handleFloorClick(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#7f2c8e", marginTop: "60px" }}>
        Welcome to our CME Office Seat Reservation Website! Reserve your ideal
        workspace with ease and convenience.
      </h2>
      <CssBaseline />
      <Select
        value={selectedFloor}
        onChange={handleFloorChange}
        sx={{
          width: "200px",
          m: 1,
          p: 0,
          display: "inline-block",
          textAlign: "center",
        }}
        className="select"
      >
        <MenuItem value="7">Floor 7</MenuItem>
        <MenuItem value="8">Floor 8</MenuItem>
      </Select>
      {floor ? <Floor floor_number={floor} /> : null}
    </Box>
  );
};

export default BookingArea;
