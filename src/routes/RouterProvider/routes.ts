import NotFound404 from "../../components/NotFound404/NotFound404";
import AdminBookings from "../../pages/AdminBookings/AdminBookings";
import AdminHistory from "../../pages/AdminHistory/AdminHistory";
import AdminHome from "../../pages/AdminHome/AdminHome";
import BookingArea from "../../pages/BookingArea/BookingArea";
import MyBookings from "../../pages/MyBookings/MyBookings";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

export const userRoutes: RouteConfig[] = [
  {
    path: `/booking/:floor`,
    component: BookingArea,
  },

  {
    path: `/my-bookings`,
    component: MyBookings,
  },

  {
    path: `/404`,
    component: NotFound404,
  },
];

export const adminRoutes: RouteConfig[] = [
  {
    path: `/admin-statistics`,
    component: AdminHome,
  },

  {
    path: `/admin-bookings`,
    component: AdminBookings,
  },

  {
    path: `/admin-history`,
    component: AdminHistory,
  },

  {
    path: `/admin-floor`,
    component: AdminHome,
  },
];
