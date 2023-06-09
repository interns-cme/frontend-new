import { Box } from "@mui/material";
import React from "react";
import Seat from "../Seat/Seat";
import { SeatProps } from "../../../models/ISeat.model";
import { TableProps } from "../../../models/ITable.model";

const Table: React.FC<TableProps> = ({ Seats }) => {
  const seats: React.ReactElement[] = Seats.map((seat) => (
    <Seat key={seat.seat_id} status={seat.status} seat_id={seat.seat_id} />
  ));
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
