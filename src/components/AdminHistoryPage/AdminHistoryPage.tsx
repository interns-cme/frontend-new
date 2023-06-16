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
import AdminHistoryPageReadOnlyRow from "./AdminHistoryPageReadOnlyRow";
import { AdminBooking } from "../../models/IAdminBooking.model";
import { bookingService } from "../../services/bookingService";

function AdminHistoryPage() {
  const [userBookings, setUserBookings] = useState<AdminBooking[]>([]);

  const [nameFilter, setNameFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [seatFilter, setSeatFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
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

  const handleDateFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateFilter(event.target.value);
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
      const dateMatch = booking.start_date
        .toLowerCase()
        .includes(dateFilter.toLowerCase());
      return userMatch && floorMatch && seatMatch && dateMatch;
    });

    setFilteredBookings(filteredBookings);
  }, [userBookings, nameFilter, floorFilter, seatFilter, dateFilter]);

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
        Booking History
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
        <TextField
          label="Date"
          value={dateFilter}
          onChange={handleDateFilterChange}
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
                borderRight: "solid 1px white",
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
                borderRight: "solid 1px white",
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
                borderRight: "solid 1px white",
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
                borderRight: "solid 1px white",
                textAlign: "center",
              }}
            >
              Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <AdminHistoryPageReadOnlyRow
                key={booking.booking_id}
                booking={booking}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center" }}>
                No bookings found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminHistoryPage;
