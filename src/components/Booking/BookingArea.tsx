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
import { useParams } from "react-router-dom";

const BookingArea: React.FC = () => {
  const { floor } = useParams();
  console.log(floor);
  const [selectedBuilding, setSelectedBuilding] = useState("BDD 1227");
  const [selectedFloor, setSelectedFloor] = useState("floor1");

  const handleBuildingChange = (event: SelectChangeEvent<string>) => {
    setSelectedBuilding(event.target.value);
  };

  const handleFloorChange = (event: SelectChangeEvent<string>) => {
    setSelectedFloor(event.target.value);
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
        value={selectedBuilding}
        onChange={handleBuildingChange}
        sx={{ width: "200px", m: 1 }}
      >
        <MenuItem value="BDD 1227">BDD 1227</MenuItem>
      </Select>
      <Select
        value={selectedFloor}
        onChange={handleFloorChange}
        sx={{ width: "200px", m: 1 }}
      >
        <MenuItem value="floor1">Floor 7</MenuItem>
        <MenuItem value="floor2">Floor 8</MenuItem>
      </Select>
      <Floor floor_number={floor} />
    </>
  );
};

export default BookingArea;
