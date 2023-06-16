import { Booking } from "./IBooking.model";
export interface User {
  userId: number;
  userBookings: Booking[];
}
