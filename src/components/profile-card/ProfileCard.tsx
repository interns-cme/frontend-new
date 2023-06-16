import { useEffect, useState } from "react";
import "./ProfileCard.css";
import { Profile } from "../../models/IProfileCard.model";

function ProfileCard() {
  const [currentUser, setCurrentUser] = useState<Profile>({
    name: "Issa Makki",
    username: "issa.makki",
    email: "issa.makki@cmeoffshore.com",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const storedUser = localStorage.getItem("currentUser") as string;
  //       if (storedUser) {
  //         const { userId } = JSON.parse(storedUser);
  //         const response = await axios.get<User>(
  //           `https://localhost:7109/${userId}/UserProfile`
  //         );
  //         console.log(response);
  //         const user = response.data;
  //         if (user) {
  //           setCurrentUser(user);
  //         }
  //       }
  //     } catch (error) {
  //       // Handle error
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="profile-card">
      <header className="header-section">
        <h1 className="name-section">{currentUser.name}</h1>
        <h3>{currentUser.username}</h3>
        <div className="info-value">{currentUser.email}</div>
      </header>
    </div>
  );
}

export default ProfileCard;
