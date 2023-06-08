import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import BookingArea from "../components/Booking/BookingArea";
import Floor from "../components/Booking/Floor/Floor";
const RouteHandler: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Booking" Component={Floor}></Route>
        <Route path="/BookingPage" Component={BookingArea}></Route>
      </Routes>
    </Router>
  );
};

export default RouteHandler;
