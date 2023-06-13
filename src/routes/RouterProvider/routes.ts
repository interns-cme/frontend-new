import BookingArea from "../../pages/BookingArea/BookingArea";
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

  {
    path: `/admin-home`,
    component: AdminHome,
  },

  // {
  //   path: `/404`,
  //   component: NotFound404,
  // },
];
