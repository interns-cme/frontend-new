import NotFound404 from "../../components/not-found-404/NotFound404";
import Shell from "../../components/shell/Shell";
import AdminBookings from "../../pages/admin-bookings/AdminBookings";
import AdminHistory from "../../pages/admin-history/AdminHistory";
import AdminHome from "../../pages/admin-home/AdminHome";
import BookingArea from "../../pages/booking-area/BookingArea";
import MyBookings from "../../pages/my-bookings/MyBookings";

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
  {
    path: `/404`,
    component: NotFound404,
  },
];
