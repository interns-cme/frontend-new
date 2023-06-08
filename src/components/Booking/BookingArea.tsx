import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  BottomNavigation,
  Box,
  Container,
  CssBaseline,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Table from "./Table/Table";
import Seat from "./Seat/Seat";

const BookingArea: React.FC = () => {
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
      <Navbar />
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "solid 1px",
            backgroundColor: "#D5C3B4",
            p: 2,
            width: "400px",
            height: "800px",
            m: 2,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Table />
            <Divider />
            <Table />
            <Table />
            <Box
              sx={{
                border: "solid 1px",
                marginLeft: 0,
                p: "4px",
                width: "min-content",
              }}
            >
              <Table />
              <Table />
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                marginLeft: 0,
                width: "120px",
                height: "100px",
              }}
            >
              <Box sx={{ float: "right" }}>
                <Seat isReserved={true} />
              </Box>
              <Box sx={{ float: "left" }}>
                <Seat isReserved={true} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ float: "right", right: 0, marginLeft: "130px" }}>
            <Box
              sx={{
                border: "solid 1px",
                marginLeft: 0,
                width: "120px",
                height: "100px",
              }}
            >
              <Box sx={{ float: "right" }}>
                <Seat isReserved={true} />
              </Box>
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                marginLeft: 0,
                width: "120px",
                height: "100px",
              }}
            >
              <Box sx={{ float: "right" }}>
                <Seat isReserved={true} />
                <Seat isReserved={true} />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "100px",
                border: "solid 1px",
                marginLeft: 0,
                width: "120px",
                height: "100px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookingArea;
