import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Seat from "../Seat/Seat";
import { SeatProps } from "../../../models/ISeat.model";
import { TableProps } from "../../../models/ITable.model";
import SeatAdmin from "../Seat/SeatAdmin";

const Table: React.FC<TableProps> = ({ table_id, Seats, isTwoSided }) => {
  // const [seats, setSeats] = useState<SeatProps[]>([]);
  // useEffect(() => {
  //   // Fetch the seats array for the specific table from the backend
  //   const fetchSeats = async () => {
  //     try {
  //       const response = await axios.get(`/api/tables/${table_id}/seats`); // Replace the endpoint with the actual one that fetches seats for the table
  //       setSeats(response.data.seats);
  //     } catch (error) {
  //       console.log("Error fetching seats:", error);
  //     }
  //   };

  //   fetchSeats();
  // }, [table_id]);

  const seats: React.ReactElement[] = Seats.map((seat) => (
    <SeatAdmin key={seat.seat_id} status={seat.status} seat_id={seat.seat_id} />
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
    <Box
      sx={
        {
          // transform: "rotate(90deg)",
          // transformOrigin: "50% 50%",
        }
      }
    >
      {isTwoSided ? (
        <Box>
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
        <Box>
          <Box
            sx={{
              width: `${width}px`,
              backgroundColor: "#966F33",
              height: "60px",
            }}
          />
          <Box display="flex" sx={{ marginTop: "10px" }}>
            {seats}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Table;
