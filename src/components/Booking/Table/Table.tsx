import { Box } from "@mui/material";
import React from "react";
import Seat from "../Seat/Seat";

const Table: React.FC = () => {
  return (
    <>
      <Box display="flex" sx={{ marginTop: "10px" }}>
        <Seat isReserved={false} />
        <Seat isReserved={false} />
        <Seat isReserved={false} />
      </Box>
      <Box
        sx={{ width: "110px", backgroundColor: "#966F33", height: "60px" }}
      />
      <Box display="flex">
        <Seat isReserved={false} />
        <Seat isReserved={false} />
        <Seat isReserved={false} />
      </Box>
    </>
  );
};

export default Table;
