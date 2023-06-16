import { Booking } from "../models/IBooking.model";

import axiosInstance from "../utils/axiosConfig";

import keycloak from "../utils/keycloak";

export const bookingService = {
  getBookings: async () => {
    const userId = keycloak?.tokenParsed?.preferred_username;

    return axiosInstance.get(
      `/reservation/reservation-today-for/${userId}`
    );
  },

  deleteBooking: async (booking_id: string): Promise<Booking> => {
    return axiosInstance.delete("");
  },
};
