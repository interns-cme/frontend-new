import React from "react";
import { Box, Divider } from "@mui/material";
import Table from "../Table/Table";
import Seat from "../Seat/Seat";
import Room from "../Room/Room";

const BookingArea: React.FC = () => {
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
            <Room />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookingArea;
