import React, { useState, useEffect } from "react";
import "./AdminBookingsPage.css";

import AdminBookingsPageReadOnlyRow from "./AdminBookingsPageReadOnlyRow";
import { AdminBooking } from "../../models/IAdminBooking.model";
import keycloak from "../../utils/keycloak";
import axios from "axios";

function AdminBookingsPage() {
  const [userBookings, setUserBookings] = useState<AdminBooking[]>([]);

  const [nameFilter, setNameFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [seatFilter, setSeatFilter] = useState("");
  const [filteredBookings, setFilteredBookings] = useState<AdminBooking[]>([]);

  const handleUnbook = (bookingId: number) => {
    const updatedBookings = userBookings.filter(
      (booking: { bookingId: number }) => booking.bookingId !== bookingId
    );
    setUserBookings((prevBookings) => updatedBookings);
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
    const currentUser = keycloak.token;
    if (currentUser) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${keycloak.token}`;
    }

    axios
      .get<AdminBooking[]>(
        "https://d2a3-193-227-191-93.ngrok-free.app/reservation/all-reservations",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${keycloak.token}`,
          },
        }
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
      return userMatch && floorMatch && seatMatch;
    });

    setFilteredBookings(filteredBookings);
  }, [userBookings, nameFilter, floorFilter, seatFilter]);

  return (
    <div className="my-bookings-container">
      <h1 className="heading">User Bookings</h1>

      <form className="filter-form">
        <div className="filter-group">
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
        </div>

        <div className="filter-group">
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
        </div>

        <div className="filter-group">
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
        </div>
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
