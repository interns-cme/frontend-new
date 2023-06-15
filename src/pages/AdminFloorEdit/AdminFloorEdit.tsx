import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import EditFloor from "./EditFloor";

function AdminFloorEdit() {
  const { floor } = useParams();
  console.log(floor);
  const [selectedFloor, setSelectedFloor] = useState("7");
  const navigate = useNavigate();
  const handleFloorClick = (floor: string) => {
    navigate(`/admin-floor/${floor}`);
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
      <h1
        style={{
          marginBottom: "2rem",
          textDecoration: "underline dotted",
          fontSize: "2.6rem",
        }}
      >
        Edit Floor
      </h1>
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
      >
        <MenuItem value="7">Floor 7</MenuItem>
        <MenuItem value="8">Floor 8</MenuItem>
      </Select>
      {floor ? <EditFloor floor_number={floor} /> : null}
    </Box>
  );
}

export default AdminFloorEdit;
