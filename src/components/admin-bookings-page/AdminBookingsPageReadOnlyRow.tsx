import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";
import { AdminBooking } from "../../models/IAdminBooking.model";

interface Props {
  booking: AdminBooking;
  onUnbook: (bookingId: string) => void;
}

const AdminBookingsPageReadOnlyRow: React.FC<Props> = ({
  booking,
  onUnbook,
}) => {
  const handleUnbook = () => {
    onUnbook(booking.booking_id);
  };

  return (
    <TableRow>
      <TableCell
        style={{
          textAlign: "center",
        }}
      >
        {booking.user_id}
      </TableCell>
      <TableCell
        style={{
          textAlign: "center",
        }}
      >
        {booking.booking_id}
      </TableCell>
      <TableCell
        style={{
          textAlign: "center",
        }}
      >
        {booking.floor_number}
      </TableCell>
      <TableCell
        style={{
          textAlign: "center",
        }}
      >
        {booking.seat_number}
      </TableCell>
      <TableCell
        style={{
          textAlign: "center",
        }}
      >
        {booking.start_date}
      </TableCell>
      <TableCell
        style={{
          textAlign: "left",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className="unbook-button"
          onClick={handleUnbook}
        >
          Unbook
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AdminBookingsPageReadOnlyRow;
