import { Booking } from "../models/IBooking.model";
import axiosInstance from "../utils/axiosConfig";

function getBookings(): Promise<Booking> {
  return axiosInstance.get("");
}

function getBookingsById(id: string): Promise<Booking> {
  return axiosInstance.get("");
}

function getBookings(): Promise<Booking> {
  return axiosInstance.get("");
}

export const booking;
