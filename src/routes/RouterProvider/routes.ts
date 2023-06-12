import BookingArea from "../../components/Booking/BookingArea";
import HomePage from "../../pages/HomePage/HomePage";
import pageNotFound from "../../pages/pageNotFound";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: "/home",
    component: HomePage,
  },

  {
    path: "/bookingPage/:floor",
    component: BookingArea,
  },
  {
    path: "/404",
    component: pageNotFound,
  },
];
