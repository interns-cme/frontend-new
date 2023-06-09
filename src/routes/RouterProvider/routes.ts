import Book from "../../pages/Book";
import MyBookings from "../../pages/Book";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: "/book",
    component: Book,
  },
  {
    path: "/myBookings",
    component: MyBookings,
  },
];
