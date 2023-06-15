import React, { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";
import AdminBookingsPageReadOnlyRow from "./AdminBookingsPageReadOnlyRow";
import { AdminBooking } from "../../models/IAdminBooking.model";
import axiosInstance from "../../utils/axiosConfig";

function AdminBookingsPage() {
  const [userBookings, setUserBookings] = useState<AdminBooking[]>([
    {
      user_id: "Issa Makki",
      booking_id: 1,
      floor_number: 5,
      seat_number: 1,
      start_date: "Monday",
    },
    {
      user_id: "Bahaa Haidar",
      booking_id: 2,
      floor_number: 5,
      seat_number: 2,
      start_date: "Monday",
    },
    {
      user_id: "Hassan Hijjawi",
      booking_id: 3,
      floor_number: 5,
      seat_number: 3,
      start_date: "Monday",
    },
  ]);

  const [nameFilter, setNameFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [seatFilter, setSeatFilter] = useState("");
  const [filteredBookings, setFilteredBookings] = useState<AdminBooking[]>([]);

  const handleUnbook = (booking_id: number) => {
    // axiosInstance
    //   .delete(`/reservation/all-reservations/${bookingId}`)
    //   .then(() => {
    //     console.log("Booking successfully deleted");
    //     setUserBookings((prevBookings) =>
    //       prevBookings.filter((booking) => booking.bookingId !== bookingId)
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleUserFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(event.target.value);
  };

  const handleFloorFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFloorFilter(event.target.value);
  };

  const handleSeatFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSeatFilter(event.target.value);
  };

  useEffect(() => {
    axiosInstance
      .get<AdminBooking[]>("/building/all-buildings")
      .then((response) => {
        setUserBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const filteredBookings = userBookings.filter((booking) => {
      const userMatch = booking.user_id
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const floorMatch = booking.floor_number.toString().includes(floorFilter);
      const seatMatch = booking.seat_number.toString().includes(seatFilter);
      return userMatch && floorMatch && seatMatch;
    });

    setFilteredBookings(filteredBookings);
  }, [userBookings, nameFilter, floorFilter, seatFilter]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "3% 0% 4% 0%",
        paddingLeft: "50px",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        style={{
          textAlign: "left",
          marginBottom: "2rem",
          borderBottom: "dashed 1px",
          width: "25%",
          fontSize: "2.6rem",
        }}
      >
        User Bookings
      </Typography>

      <form style={{ marginBottom: "2rem", display: "flex" }}>
        <TextField
          label="User"
          value={nameFilter}
          onChange={handleUserFilterChange}
          style={{ marginRight: "1rem" }}
        />
        <TextField
          label="Floor"
          value={floorFilter}
          onChange={handleFloorFilterChange}
          style={{ marginRight: "1rem" }}
        />
        <TextField
          label="Seat"
          value={seatFilter}
          onChange={handleSeatFilterChange}
          style={{ marginRight: "1rem" }}
        />
      </form>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
                borderRight: "solid 1px #f5f0f8",
                textAlign: "center",
              }}
            >
              User
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
                borderRight: "solid 1px #f5f0f8",
                textAlign: "center",
              }}
            >
              Booking ID
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
                borderRight: "solid 1px #f5f0f8",
                textAlign: "center",
              }}
            >
              Floor
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
                borderRight: "solid 1px #f5f0f8",
                textAlign: "center",
              }}
            >
              Seat
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
                borderRight: "solid 1px #f5f0f8",
                textAlign: "center",
              }}
            >
              Date
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
              }}
            >
              Decision
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <AdminBookingsPageReadOnlyRow
                key={booking.booking_id}
                booking={booking}
                onUnbook={handleUnbook}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} style={{ textAlign: "center" }}>
                No bookings found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminBookingsPage;
