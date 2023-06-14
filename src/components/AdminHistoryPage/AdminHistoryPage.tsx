import React, { useState, useEffect } from "react";
import "../AdminBookingsPage/AdminBookingsPage.css";
import AdminHistoryPageReadOnlyRow from "./AdminHistoryPageReadOnlyRow";
import { AdminBooking } from "../../models/IAdminBooking.model";

interface User {
  userId: number;
  userBookings: AdminBooking[];
}

function AdminHistoryPage() {
  const [currentUser, setCurrentUser] = useState<User>({
    userId: 0,
    userBookings: [
      {
        user: "Issa Makki",
        bookingId: 535,
        floor: 7,
        seat: 64,
        bookingDate: "Monday",
      },
      {
        user: "Bahaa Haidar",
        bookingId: 536,
        floor: 8,
        seat: 62,
        bookingDate: "Monday",
      },
      {
        user: "Hassan Hijjawi",
        bookingId: 537,
        floor: 7,
        seat: 66,
        bookingDate: "Monday",
      },
      {
        user: "Youry Allam",
        bookingId: 538,
        floor: 7,
        seat: 67,
        bookingDate: "Monday",
      },

      {
        user: "Issa Makki",
        bookingId: 535,
        floor: 7,
        seat: 64,
        bookingDate: "Tuesday",
      },
      {
        user: "Bahaa Haidar",
        bookingId: 536,
        floor: 8,
        seat: 62,
        bookingDate: "Tuesday",
      },
      {
        user: "Hassan Hijjawi",
        bookingId: 537,
        floor: 7,
        seat: 66,
        bookingDate: "Tuesday",
      },
      {
        user: "Youry Allam",
        bookingId: 538,
        floor: 7,
        seat: 67,
        bookingDate: "Tuesday",
      },
    ],
  });

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
    const filteredBookings = currentUser.userBookings.filter((booking) => {
      const userMatch = booking.user
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const floorMatch = booking.floor.toString().includes(floorFilter);
      const seatMatch = booking.seat.toString().includes(seatFilter);
      const dateMatch = booking.bookingDate
        .toLowerCase()
        .includes(dateFilter.toLowerCase());
      return userMatch && floorMatch && seatMatch && dateMatch;
    });

    setFilteredBookings(filteredBookings);
  }, [
    currentUser.userBookings,
    nameFilter,
    floorFilter,
    seatFilter,
    dateFilter,
  ]);

  return (
    <div className="my-bookings-container">
      <h1
        style={{
          textAlign: "left",
          marginBottom: "2rem",
          borderBottom: "dashed 1px",
          width: "30%",
          fontSize: "2.6rem",
        }}
      >
        Booking History
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

        <label className="filter-label" htmlFor="dateFilter">
          Date:
        </label>
        <input
          type="text"
          id="dateFilter"
          className="filter-input"
          value={dateFilter}
          onChange={handleDateFilterChange}
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
          </tr>
        </thead>

        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <AdminHistoryPageReadOnlyRow
                key={booking.bookingId}
                booking={booking}
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

export default AdminHistoryPage;
