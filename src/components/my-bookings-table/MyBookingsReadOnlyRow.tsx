import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";
import { Booking } from "../../models/IBooking.model";

interface Props {
  booking: Booking;
  onUnbook: (bookingId: number) => void;
}

const MyBookingsReadOnlyRow: React.FC<Props> = ({ booking, onUnbook }) => {
  const handleUnbook = () => {
    onUnbook(booking.booking_id);
  };

  return (
    <TableRow>
      <TableCell>{booking.booking_id}</TableCell>
      <TableCell>{booking.floor_number}</TableCell>
      <TableCell>{booking.seat_number}</TableCell>
      <TableCell>{booking.start_date}</TableCell>
      <TableCell
        style={{
          textAlign: "left",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleUnbook}>
          Unbook
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MyBookingsReadOnlyRow;
