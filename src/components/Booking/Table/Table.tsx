import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Seat from "../Seat/Seat";
import { SeatProps } from "../../../models/ISeat.model";
import { TableProps } from "../../../models/ITable.model";

const Table: React.FC<TableProps> = ({ Seats, isTwoSided }) => {
  const seats: React.ReactElement[] = Seats.map((seat) => (
    <Seat key={seat.seat_id} status={seat.status} seat_id={seat.seat_id} />
  ));
  const [width, setWidth] = useState((seats.length / 2) * 35);
  const halfIndex = Math.ceil(seats.length / 2);
  const topHalf = seats.slice(0, halfIndex);
  const bottomHalf = seats.slice(halfIndex);

  useEffect(() => {
    if (isTwoSided === false) {
      setWidth(seats.length * 35);
    } else {
      setWidth((seats.length / 2) * 35);
    }
  }, [isTwoSided, seats.length]);

  return (
    <>
      {isTwoSided ? (
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
      ) : (
        <Box
          sx={
            {
              //   transform: "rotate(90deg)",
              //   transformOrigin: "50% 50%",
            }
          }
        >
          <Box display="flex" sx={{ marginTop: "10px" }}>
            {seats}
          </Box>
          <Box
            sx={{
              width: `${width}px`,
              backgroundColor: "#966F33",
              height: "60px",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default Table;
