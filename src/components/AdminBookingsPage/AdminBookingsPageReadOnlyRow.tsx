/* eslint-disable react/prop-types */
import "./AdminBookingsPage.css";
import { AdminBooking } from "../../models/IAdminBooking.model";

interface Props {
  booking: AdminBooking;
  onUnbook: (bookingId: number) => void;
}

const AdminBookingsPageReadOnlyRow: React.FC<Props> = ({
  booking,
  onUnbook,
}) => {
  const handleUnbook = () => {
    onUnbook(booking.bookingId);
  };

  return (
    <tr>
      <td className="rows">{booking.user_id}</td>
      <td className="rows">{booking.bookingId}</td>
      <td className="rows">{booking.floor_number}</td>
      <td className="rows">{booking.seat_number}</td>
      <td className="rows">{booking.bookingDate}</td>
      <td>
        <button className="unbook-button" onClick={handleUnbook}>
          Unbook
        </button>
      </td>
    </tr>
  );
};

export default AdminBookingsPageReadOnlyRow;
