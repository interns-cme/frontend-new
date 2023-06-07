import { useEffect, useState } from "react";
import "./ProfileCard.css";
import axios from 'axios';

function ProfileCard() {
  const [currentUser, setCurrentUser] = useState({});



  //  useEffect(() => {
  //   axios.get(`https://localhost:7109/${JSON.parse(localStorage.getItem("currentUser")).userId}/UserProfile`).then((response) => {

  //     console.log(response);
  //     const user  = response.data;
  //     if (user) {
  //       setCurrentUser(user);
  //     }
  //   });
  // }, []);




  return (
    <div>
      <header className="header-section">
        <h1 className="name-section">
          Issa Makki
          {/* {currentUser.name} */}
        </h1>
        <h3>
          issa.makki
          {/* {currentUser.username} */}
          </h3>
      </header>

      <div className="basic-info">
        <h1>Personal Information</h1>

        <hr className="horiz-line"></hr>

        <div className="info-section">
          <div className="id-section">
            <h2 className="bold-text">
              Name: Issa Makki {/* {currentUser.name} */}
            </h2>
          </div>

          <div className="email-section">
            <h2 className="bold-text">
              Email: issamakki@gmail.com {/* {currentUser.email} */}
              </h2>
          </div>

       
          
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
