import BookingArea from "../../pages/BookingArea/BookingArea";
import NotFound404 from "../../components/NotFound404/NotFound404";
import HomePage from "../../pages/HomePage/HomePage";
import pageNotFound from "../../pages/pageNotFound";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: "/book",
    component: HomePage,
  },

  {
    path: `/booking/:floor`,
    component: BookingArea,
  },
  {
    path: `/404`,
    component: NotFound404,
  },
];
