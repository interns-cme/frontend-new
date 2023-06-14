import { useEffect, useState } from "react";
import MyBookingsReadOnlyRow from "./MyBookingsReadOnlyRow";
import axios from "axios";
import keycloak from "../../utils/keycloak";
import { Booking } from "../../models/IBooking.model";

function MyBookingsTable() {
  const [userBookings, setUserBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const currentUser = keycloak.token;
    if (currentUser) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${keycloak.token}`;
    }

    axios
      .get<Booking[]>("https://9e53-193-227-191-93.ngrok-free.app/")
      .then((response) => {
        setUserBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [notes]);

  const handleUnbook = (bookingId: number) => {
    // axios.delete();
    console.log("Unbooking", bookingId);
  };

  return (
    <div className="my-bookings-container">
      <h1 className="booking-title">Your Bookings</h1>

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
          {userBookings.length > 0 ? (
            userBookings.map((booking) => (
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
    </div>
  );
}

export default MyBookingsTable;
