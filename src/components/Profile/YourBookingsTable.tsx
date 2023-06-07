import { useState, useEffect } from "react";
import "./ProfileTable.css";
import data from "./mock-data-profile.json";
import YourBookingsReadOnlyRow from "./YourBookingsReadOnlyRow";
import axios from "axios";

export interface Contact {
  id: number;
  name: string;
}

interface User {
  userId: number;
  userBookings: Contact[] | null;
}

function YourBookingsTable() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectBuilding, setSelectBuilding] = useState("");
  const [clicked, setClicked] = useState(false);

  const [userData, setUserData] = useState<Contact[]>([]);
  const [clicked1, setClicked1] = useState(false);

  // const [currentUser, setCurrentUser] = useState<User>({});

  // useEffect(() => {
  //   axios
  //     .get<User>(
  //       `https://localhost:7109/${
  //         JSON.parse(localStorage.getItem("currentUser")).userId
  //       }/UserProfile`
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       const user = response.data;
  //       if (user) {
  //         setCurrentUser(user);
  //       }
  //     });
  // }, []);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleClick1() {
    setClicked1(!clicked1);
    const element = document.getElementById("disappears");
    if (element) {
      element.innerHTML = "";
    }
  }

  return (
    <div className="profile-tablecontainer">
      <h1>Your House(s)</h1>

      <hr className="horizontal-line" />

      <form className="profile-form">
        <table className="table-design">
          <thead className="table-head">
            <tr className="table-row">
              <th className="table-h">Booking ID</th>
              <th className="table-h">Seat ID</th>
              <th className="table-h">Building</th>
              <th className="table-h">Floor</th>
              <th className="table-h">Booking Date</th>
            </tr>
          </thead>

          <tbody>
            {/* {currentUser.userBookings !== null ? (
              currentUser.userBookings.map((contact) => (
                <YourBookingsReadOnlyRow key={contact.id} contact={contact} />
              ))
            ) : (
              <tr>
                <td>No data</td>
              </tr>
            )} */}
          </tbody>
        </table>
      </form>

    </div>
  );
}

export default YourBookingsTable;
