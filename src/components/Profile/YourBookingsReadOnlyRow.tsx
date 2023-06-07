import React from 'react';

interface Contact {
  id: number;
  name: string;
}


const YourBookingsReadOnlyRow: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <tr>
      <td className="rows">{contact.id}</td>
      <td className="rows">{contact.name}</td>

      {/* <td className="rows">{contact.name}</td>
      <td className="rows">{contact.bookingId}</td>
      <td className="rows">{contact.seatId}</td>
      <td className="rows">{contact.location}</td> */}
    </tr>
  );
};

export default YourBookingsReadOnlyRow;
