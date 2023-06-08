import { Box } from "@mui/material";
import React from "react";
import Seat from "../Seat/Seat";
import { SeatProps } from "../../../models/ISeat.model";

const Table: React.FC = () => {
  const seats: React.ReactElement[] = [
    <Seat key="1" isReserved={false} />,
    <Seat key="2" isReserved={false} />,
    <Seat key="3" isReserved={false} />,
    <Seat key="4" isReserved={false} />,
    <Seat key="5" isReserved={false} />,
    <Seat key="6" isReserved={false} />,
    // <Seat key="7" isReserved={false} />,
    // <Seat key="8" isReserved={false} />,
    // <Seat key="9" isReserved={false} />,
    // <Seat key="10" isReserved={false} />,
  ];
  const width = (seats.length / 2) * 35;
  const halfIndex = Math.ceil(seats.length / 2);
  const topHalf = seats.slice(0, halfIndex);
  const bottomHalf = seats.slice(halfIndex);
  return (
    <>
      <Box
        sx={
          {
            //   transform: "rotate(90deg)",
            //   transformOrigin: "50% 50%",
          }
        }
      >
        <Box display="flex" sx={{ marginTop: "10px" }}>
          {topHalf}
        </Box>
        <Box
          sx={{
            width: `${width}px`,
            backgroundColor: "#966F33",
            height: "60px",
          }}
        />
        <Box display="flex">{bottomHalf}</Box>
      </Box>
    </>
  );
};

export default Table;
