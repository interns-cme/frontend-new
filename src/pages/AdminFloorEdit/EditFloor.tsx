import React from "react";
import { Box, Divider } from "@mui/material";
import Table from "../../components/Booking/Table/TableTest";
import Seat from "../../components/Booking/Seat/Seat";
import Room from "../../components/Booking/Room/Room";
import { SeatProps } from "../../models/ISeat.model";
import { FloorProps } from "../../models/IFloor.model";
import { useNavigate } from "react-router-dom";
import SeatAdmin from "../../components/Booking/Seat/SeatAdmin";

const Floor: React.FC<FloorProps> = ({ floor_number }) => {
  const seats: SeatProps[] = [
    { seat_id: 1, status: false },
    { seat_id: 2, status: true },
    { seat_id: 3, status: false },
    { seat_id: 4, status: false },
    { seat_id: 5, status: false },
    { seat_id: 6, status: true },
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
  const navigate = useNavigate();
  console.log(floor_number);
  // if (floor_number !== "7" && floor_number !== "8") {
  //   navigate("/404");
  // }
  return (
    <Box sx={{ margin: "0 auto" }}>
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
              <Table Seats={seats} table_id={"0"} isTwoSided={true} />
              <Divider />
              <Table Seats={seats} table_id={"0"} isTwoSided={true} />
              <Table Seats={seats} table_id={"0"} isTwoSided={true} />
              <Box
                sx={{
                  border: "solid 1px",
                  marginLeft: 0,
                  p: "4px",
                  width: "min-content",
                }}
              >
                <Table Seats={seats} table_id={"0"} isTwoSided={true} />
                <Table Seats={seats} table_id={"0"} isTwoSided={true} />
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
                  <SeatAdmin status={true} seat_id={0} />
                </Box>
                <Box sx={{ float: "left" }}>
                  <SeatAdmin status={true} seat_id={0} />
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
                  <SeatAdmin status={true} seat_id={0} />
                  <SeatAdmin seat_id={0} status={true} />
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
              height: "750px",
              m: 2,
              paddingBottom: 0,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  marginTop: "50px",
                  marginRight: "5px",
                  display: "flex",
                  flexDirection: "column",
                  height: "90%",
                  paddingBottom: 0,
                }}
              >
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "90%",
                  paddingBottom: 0,
                }}
              >
                <Box
                  sx={{ height: "160px", width: "80px", marginTop: "130px" }}
                ></Box>
                <Divider />
                <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
                <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
                <Box
                  sx={{
                    border: "solid 1px",
                    marginLeft: 0,
                    p: "4px",
                    width: "min-content",
                  }}
                >
                  <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
                  <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Table Seats={seats2} table_id={"0"} isTwoSided={false} />
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
                }}
              ></Box>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Box sx={{ height: "160px", width: "80px" }}></Box>
              <Divider />
              <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
              <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
              <Box
                sx={{
                  border: "solid 1px",
                  marginLeft: 0,
                  p: "4px",
                  width: "min-content",
                }}
              >
                <Table Seats={seats2} table_id={"0"} isTwoSided={true} />
              </Box>
              <Room />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Floor;
