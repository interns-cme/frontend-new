import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import BookingArea from "../components/Booking/BookingArea";
import Floor from "../components/Booking/Floor/Floor";
import { Box } from "@mui/material";
import HomePage from "../pages/HomePage/HomePage";
import Floor8 from "../components/Booking/Floor/Floor8";
const RouteHandler: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/BookingPage/:floor" Component={BookingArea}></Route>
        <Route path="/Home" Component={HomePage}></Route>
      </Routes>
    </Router>
  );
};

export default RouteHandler;
