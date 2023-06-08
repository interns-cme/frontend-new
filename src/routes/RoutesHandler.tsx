import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import BookingArea from "../components/Booking/BookingArea";
const RouteHandler: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Booking" Component={BookingArea}></Route>
        <Route path="/Login" Component={BookingArea}></Route>
      </Routes>
    </Router>
  );
};

export default RouteHandler;
