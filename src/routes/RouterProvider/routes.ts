import BookingArea from "../../components/Booking/BookingArea";
import HomePage from "../../pages/HomePage/HomePage";
import MyBookings from "../../pages/MyBookings/MyBookings";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: `/booking/:floor`,
    component: BookingArea,
  },

  {
    path: `/my-bookings`,
    component: MyBookings,
  },

  // {
  //   path: `/404`,
  //   component: NotFound404,
  // },
];
