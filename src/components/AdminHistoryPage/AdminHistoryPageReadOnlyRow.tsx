/* eslint-disable react/prop-types */
import "../AdminBookingsPage/AdminBookingsPage.css";
import { AdminBooking } from "../../models/IAdminBooking.model";

interface Props {
  booking: AdminBooking;
}

const AdminHistoryPageReadOnlyRow: React.FC<Props> = ({ booking }) => {
  return (
    <tr>
      <td className="rows">{booking.user}</td>
      <td className="rows">{booking.bookingId}</td>
      <td className="rows">{booking.floor}</td>
      <td className="rows">{booking.seat}</td>
      <td className="rows">{booking.bookingDate}</td>
    </tr>
  );
};

export default AdminHistoryPageReadOnlyRow;
