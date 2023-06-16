import { AdminBooking } from "./IAdminBooking.model";

export interface AdminUser {
  userId: number;
  userBookings: AdminBooking[];
}
