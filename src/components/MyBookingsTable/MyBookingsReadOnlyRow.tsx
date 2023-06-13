/* eslint-disable react/prop-types */
import "./MyBookingsTable.css";
import { Booking } from "../../models/IBooking.model";

interface Props {
  booking: Booking;
  onUnbook: (bookingId: number) => void;
}

const MyBookingsReadOnlyRow: React.FC<Props> = ({ booking, onUnbook }) => {
  const handleUnbook = () => {
    onUnbook(booking.bookingId);
  };

  return (
    <tr>
      <td className="rows">{booking.bookingId}</td>
      <td className="rows">{booking.floor}</td>
      <td className="rows">{booking.seat}</td>
      <td className="rows">{booking.bookingDate}</td>
      <td>
        <button className="unbook-button" onClick={handleUnbook}>
          Unbook
        </button>
      </td>
    </tr>
  );
};

export default MyBookingsReadOnlyRow;
