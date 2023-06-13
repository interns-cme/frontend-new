import { useState } from "react";
import MyBookingsReadOnlyRow from "./MyBookingsReadOnlyRow";
import { Booking } from "../../models/IBooking.model";

interface User {
  userId: number;
  userBookings: Booking[];
}

function MyBookingsTable() {
  const [currentUser, setCurrentUser] = useState<User>({
    userId: 0,
    userBookings: [
      {
        bookingId: 535,
        floor: 7,
        seat: 64,
        bookingDate: "Monday 5:30PM",
      },
    ],
  });

  const handleUnbook = (bookingId: number) => {
    // axios.delete();
    console.log("Unbooking", bookingId);
  };

  return (
    <div className="my-bookings-container">
      <h1 className="booking-title">Your Bookings</h1>

      <form>
        <table className="table-design">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Floor</th>
              <th>Seat</th>
              <th>Date</th>
              <th className="decision">Decision</th>
            </tr>
          </thead>

          <tbody>
            {currentUser.userBookings.length > 0 ? (
              currentUser.userBookings.map((booking) => (
                <MyBookingsReadOnlyRow
                  key={booking.bookingId}
                  booking={booking}
                  onUnbook={handleUnbook}
                />
              ))
            ) : (
              <tr>
                <td>No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </form>

      <form></form>
    </div>
  );
}

export default MyBookingsTable;
