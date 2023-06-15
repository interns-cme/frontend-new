import React, { useState, useEffect } from "react";
import "./AdminBookingsPage.css";

import { AdminBooking } from "../../models/IAdminBooking.model";
import AdminBookingsPageReadOnlyRow from "./AdminBookingsPageReadOnlyRow";

interface User {
  userId: number;
  userBookings: AdminBooking[];
}

function AdminBookingsPage() {
  const [currentUser, setCurrentUser] = useState<User>({
    userId: 0,
    userBookings: [
      {
        user_id: "Issa Makki",
        bookingId: 535,
        floor_number: 7,
        seat_number: 64,
        bookingDate: "Monday",
      },
      {
        user_id: "Bahaa Haidar",
        bookingId: 536,
        floor_number: 8,
        seat_number: 62,
        bookingDate: "Monday",
      },
      {
        user_id: "Hassan Hijjawi",
        bookingId: 537,
        floor_number: 7,
        seat_number: 66,
        bookingDate: "Monday",
      },
      {
        user_id: "Youry Allam",
        bookingId: 538,
        floor_number: 7,
        seat_number: 67,
        bookingDate: "Monday",
      },
    ],
  });

  const [nameFilter, setNameFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [seatFilter, setSeatFilter] = useState("");
  const [filteredBookings, setFilteredBookings] = useState<AdminBooking[]>([]);

  const handleUnbook = (bookingId: number) => {
    //axios.delete()

    const updatedBookings = currentUser.userBookings.filter(
      (booking) => booking.bookingId !== bookingId
    );
    setCurrentUser((prevUser) => ({
      ...prevUser,
      userBookings: updatedBookings,
    }));
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
    const filteredBookings = currentUser.userBookings.filter((booking) => {
      const userMatch = booking.user_id
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const floorMatch = booking.floor_number.toString().includes(floorFilter);
      const seatMatch = booking.seat_number.toString().includes(seatFilter);
      return userMatch && floorMatch && seatMatch;
    });

    setFilteredBookings(filteredBookings);
  }, [currentUser.userBookings, nameFilter, floorFilter, seatFilter]);

  return (
    <div className="my-bookings-container">
      <h1
        style={{
          textAlign: "left",
          marginBottom: "2rem",
          borderBottom: "dashed 1px",
          width: "25%",
          fontSize: "2.6rem",
        }}
      >
        User Bookings
      </h1>

      <form className="filter-form">
        <label className="filter-label" htmlFor="nameFilter">
          User:
        </label>
        <input
          type="text"
          id="nameFilter"
          className="filter-input"
          value={nameFilter}
          onChange={handleUserFilterChange}
        />
        <br />

        <label className="filter-label" htmlFor="floorFilter">
          Floor:
        </label>
        <input
          type="text"
          id="floorFilter"
          className="filter-input"
          value={floorFilter}
          onChange={handleFloorFilterChange}
        />
        <br />

        <label className="filter-label" htmlFor="seatFilter">
          Seat:
        </label>
        <input
          type="text"
          id="seatFilter"
          className="filter-input"
          value={seatFilter}
          onChange={handleSeatFilterChange}
        />
        <br />
      </form>

      <table className="table-design">
        <thead>
          <tr>
            <th>User</th>
            <th>Booking ID</th>
            <th>Floor</th>
            <th>Seat</th>
            <th>Date</th>
            <th className="decision">Decision</th>
          </tr>
        </thead>

        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <AdminBookingsPageReadOnlyRow
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

export default AdminBookingsPage;
