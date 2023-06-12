import React, { useState } from "react";
import {
  CssBaseline,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Table from "./Table/Table";
import Seat from "./Seat/Seat";
import Floor from "./Floor/Floor";
import { useNavigate, useParams } from "react-router-dom";

const BookingArea: React.FC = () => {
  const { floor } = useParams();
  console.log(floor);
  const [selectedFloor, setSelectedFloor] = useState("7");
  const navigate = useNavigate();
  const handleFloorClick = (floor: string) => {
    navigate(`/booking/${floor}`);
  };

  const handleFloorChange = (event: SelectChangeEvent<string>) => {
    setSelectedFloor(event.target.value);
    handleFloorClick(event.target.value);
  };
  return (
    <>
      <Typography sx={{ marginTop: "100px" }}>
        <h2>
          Welcome to our CME Office Seat Reservation Website! Reserve your ideal
          workspace with ease and convenience.
        </h2>
      </Typography>
      <CssBaseline />
      <Select
        value={selectedFloor}
        onChange={handleFloorChange}
        sx={{ width: "200px", m: 1 }}
      >
        <MenuItem value="7">Floor 7</MenuItem>
        <MenuItem value="8">Floor 8</MenuItem>
      </Select>
      <Floor floor_number={floor} />
    </>
  );
};

export default BookingArea;
