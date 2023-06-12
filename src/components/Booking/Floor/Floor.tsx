import React from "react";
import { Box, Divider } from "@mui/material";
import Table from "../Table/Table";
import Seat from "../Seat/Seat";
import Room from "../Room/Room";
import { SeatProps } from "../../../models/ISeat.model";
import { FloorProps } from "../../../models/IFloor.model";
import Floor8 from "./Floor8";
import { useNavigate } from "react-router-dom";

const Floor: React.FC<FloorProps> = ({ floor_number }) => {
  const seats: SeatProps[] = [
    { seat_id: 1, status: false },
    { seat_id: 2, status: true },
    { seat_id: 3, status: false },
    { seat_id: 4, status: false },
    { seat_id: 5, status: false },
    { seat_id: 6, status: true },
  ];
  const navigate = useNavigate();
  console.log(floor_number);
  if (floor_number !== "7" && floor_number !== "8") {
    navigate("/404");
  }
  return (
    <>
      {floor_number === "7" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
              <Table Seats={seats} id={0} isTwoSided={false} />
              <Divider />
              <Table Seats={seats} id={0} isTwoSided={false} />
              <Table Seats={seats} id={0} isTwoSided={false} />
              <Box
                sx={{
                  border: "solid 1px",
                  marginLeft: 0,
                  p: "4px",
                  width: "min-content",
                }}
              >
                <Table Seats={seats} id={0} isTwoSided={false} />
                <Table Seats={seats} id={0} isTwoSided={false} />
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
                  <Seat status={true} seat_id={0} />
                </Box>
                <Box sx={{ float: "left" }}>
                  <Seat status={true} seat_id={0} />
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
                  <Seat status={true} seat_id={0} />
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
                  <Seat status={true} seat_id={0} />
                  <Seat status={true} seat_id={0} />
                </Box>
              </Box>
              <Room />
            </Box>
          </Box>
        </Box>
      ) : (
        <Floor8 floor_number={floor_number} />
      )}
    </>
  );
};

export default Floor;
