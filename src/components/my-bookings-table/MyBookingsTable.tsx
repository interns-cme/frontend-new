import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
} from "@mui/material";
import MyBookingsReadOnlyRow from "./MyBookingsReadOnlyRow";
import { Booking } from "../../models/IBooking.model";
import { bookingService } from "../../services/bookingService";

function MyBookingsTable() {
  const [userBookings, setUserBookings] = useState<Booking[]>([]);

  useEffect(() => {
    bookingService
      .getBookings()
      .then((response) => {
        console.log(response.data);
        const bookings: Booking[] = response.data;
        console.log("Received bookings:", bookings);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

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

  return (
    <div>
      <Typography
        variant="h1"
        style={{
          textAlign: "left",
          marginBottom: "2rem",
          borderBottom: "dashed 1px",
          width: "23%",
          fontSize: "2.6rem",
        }}
      >
        Your Bookings
      </Typography>

      <Table style={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontSize: "20px",
                textAlign: "center",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
              }}
            >
              Booking ID
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
              }}
            >
              Floor
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
              }}
            >
              Seat
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                backgroundColor: "#7f2c8e",
                color: "#ffffff",
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
          {userBookings.length > 0 ? (
            userBookings.map((booking) => (
              <MyBookingsReadOnlyRow
                key={booking.booking_id}
                booking={booking}
                onUnbook={handleUnbook}
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

export default MyBookingsTable;
