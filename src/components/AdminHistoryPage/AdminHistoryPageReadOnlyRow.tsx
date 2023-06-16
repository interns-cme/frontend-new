import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { AdminBooking } from "../../models/IAdminBooking.model";

interface Props {
  booking: AdminBooking;
}

const AdminHistoryPageReadOnlyRow: React.FC<Props> = ({ booking }) => {
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
    </TableRow>
  );
};

export default AdminHistoryPageReadOnlyRow;
