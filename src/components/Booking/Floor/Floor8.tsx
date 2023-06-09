import React from "react";
import { Box, Divider } from "@mui/material";
import Table from "../Table/Table";
import Seat from "../Seat/Seat";
import Room from "../Room/Room";
import { SeatProps } from "../../../models/ISeat.model";

const Floor8: React.FC = () => {
  const seats: SeatProps[] = [
    { seat_id: 1, status: false },
    { seat_id: 2, status: true },
    { seat_id: 3, status: false },
    { seat_id: 4, status: false },
    { seat_id: 5, status: true },
    { seat_id: 6, status: false },
  ];
  const seats2: SeatProps[] = [
    { seat_id: 1, status: false },
    { seat_id: 2, status: true },
    { seat_id: 3, status: false },
    { seat_id: 4, status: false },
    { seat_id: 5, status: true },
    { seat_id: 6, status: false },
    { seat_id: 7, status: true },
    { seat_id: 8, status: false },
  ];
  const tables: React.ReactElement[] = [
    <Table Seats={seats} id={0} />,
    <Table Seats={seats} id={1} />,
    <Table Seats={seats} id={2} />,
    <Table Seats={seats} id={3} />,
    <Table Seats={seats} id={4} />,
    <Table Seats={seats} id={5} />,
    // <Seat key="7" status={false} />,
    // <Seat key="8" status={false} />,
    // <Seat key="9" status={false} />,
    // <Seat key="10" status={false} />,
  ];
  return (
    <>
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
            width: "min-content",
            height: "800px",
            m: 2,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Table Seats={seats} id={0} />
            <Divider />
            <Table Seats={seats2} id={0} />
            <Table Seats={seats} id={0} />
            <Box
              sx={{
                border: "solid 1px",
                marginLeft: 0,
                p: "4px",
                width: "min-content",
              }}
            >
              <Table Seats={seats2} id={0} />
              <Table Seats={seats} id={0} />
            </Box>
          </Box>
          <Box
            sx={{
              bottom: 0,
              border: "solid 1px",
              marginLeft: 0,
              width: "600px",
              height: "600px",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              backgroundImage:
                "linear-gradient(to bottom right, transparent 50%, rgba(255, 0, 0, 0.3) 50%)",
              overflow: "initial",
              m: 2,
              marginTop: "100px",
            }}
          ></Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Table Seats={seats2} id={0} />
            <Divider />
            <Table Seats={seats2} id={0} />
            <Table Seats={seats} id={0} />
            <Box
              sx={{
                border: "solid 1px",
                marginLeft: 0,
                p: "4px",
                width: "min-content",
              }}
            >
              <Table Seats={seats2} id={0} />
              <Table Seats={seats2} id={0} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Floor8;
