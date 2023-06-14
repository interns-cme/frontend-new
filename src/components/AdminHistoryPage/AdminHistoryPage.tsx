import React, { useState, useEffect } from "react";
import "../AdminBookingsPage/AdminBookingsPage.css";
import AdminHistoryPageReadOnlyRow from "./AdminHistoryPageReadOnlyRow";
import { AdminBooking } from "../../models/IAdminBooking.model";
import { AdminUser } from "../../models/IAdminUser.model";
import keycloak from "../../utils/keycloak";
import axios from "axios";

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
    const currentUser = keycloak.token;
    if (currentUser) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${keycloak.token}`;
    }

    axios
      .get<AdminBooking[]>(
        "https://232c-178-135-120-215.ngrok-free.app/reservation/all-reservations"
      )
      .then((response) => {
        setUserBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const filteredBookings = userBookings.filter((booking) => {
      const userMatch = booking.user
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
