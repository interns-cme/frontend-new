import { Booking } from "../models/IBooking.model";

import axiosInstance from "../utils/axiosConfig";

export function getReservations() {
  return axiosInstance.get("/statistics/total-reservations")
}

