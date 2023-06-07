import Navbar from '../components/Navbar/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from '../pages/Profile';

function RoutesHandler() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* This component makes sure that only one route appears at a time */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/profile" element={<Profile />} />

        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default RoutesHandler;
