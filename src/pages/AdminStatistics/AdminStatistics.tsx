import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReservationChart from "../../components/Statistics/ReservationChart";
import axiosInstance from "../../utils/axiosConfig";
import { getReservations } from "../../services/statistics";

const Statistics: React.FC = () => {
  const chartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Reservations per day",
        data: [20, 15, 30, 25, 18, 22, 17],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const chartData2 = {
    labels: ["Floor 7", "Floor 8"],
    datasets: [
      {
        label: "Reservations per Floor",
        data: [20, 32],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const [reservations, setReservations] = useState(500);
  const [leastReservedDay, setLeastReserved] = useState("Friday");
  const [mostReservedDay, setMostReserved] = useState("Monday");
  const [leastReservedSeat, setLeastReservedSeat] = useState("B4");
  const [mostReservedSeat, setMostReservedSeat] = useState("A1");
  const [mostReservedFloor, setMostReservedFloor] = useState("Floor 8");
  const [reservationsPerDay, setReservationsPerDay] = useState(chartData);
  const [reservationsPerFloor, setReservationsPerFloor] = useState(chartData2);

  useEffect(() => {
    getReservations()
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/statistics/day-with-least-reservations")
      .then((response) => {
        console.log(response);
        setLeastReserved(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/statistics/day-with-most-reservations")
      .then((response) => {
        console.log(response);
        setMostReserved(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/statistics/floor-with-most-reservations")
      .then((response) => {
        console.log(response);
        setMostReservedFloor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/statistics/seat-with-least-reservations")
      .then((response) => {
        console.log(response);
        setLeastReservedSeat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/statistics/seat-with-most-reservations")
      .then((response) => {
        console.log(response);
        setMostReservedSeat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <h1
        style={{
          marginBottom: "2rem",
          textDecoration: "underline dotted",
          fontSize: "2.6rem",
        }}
      >
        Statistics
      </h1>

      <Box display="flex" flexWrap="wrap">
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Number of Reservations
            </Typography>
            <Typography variant="body1">{reservations}</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Most Reserved Seat
            </Typography>
            <Typography variant="body1">{mostReservedSeat}</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Floor with Most Reservations
            </Typography>
            <Typography variant="body1">{mostReservedFloor}</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Least Reserved Seat
            </Typography>
            <Typography variant="body1">{leastReservedSeat}</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Least Frequent Day
            </Typography>
            <Typography variant="body1">{leastReservedDay}</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Most Frequent Day
            </Typography>
            <Typography variant="body1">{mostReservedDay}</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Reservations per day
            </Typography>
            <ReservationChart chartData={reservationsPerDay} />
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Reservations per Floor
            </Typography>
            <ReservationChart chartData={reservationsPerFloor} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Statistics;
