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
import { bookingService } from "../../services/bookingService";

function AdminBookingsPage() {
  const [userBookings, setUserBookings] = useState<AdminBooking[]>([]);

  const [nameFilter, setNameFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [seatFilter, setSeatFilter] = useState("");
  const [filteredBookings, setFilteredBookings] = useState<AdminBooking[]>([]);

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

  const handleUnbook = (booking_id: string) => {
    bookingService
      .deleteBooking(booking_id)
      .then(() => {
        console.log("Booking successfully deleted");
        setUserBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.booking_id !== booking_id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    bookingService
      .getAdminBookings()
      .then((response) => {
        console.log(response.data);
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
