import { SeatProps } from './../models/ISeat.model';
import axiosInstance from "../utils/axiosConfig";
import keycloak from "../utils/keycloak";

export const seatService ={
    
    getUserReservation: async () => {
        const userId = keycloak?.tokenParsed?.preferred_username;
        axiosInstance.get(`reservation/reservation-today-for/${userId}`)
    },
    getReservationIdBySeatId: async (seatId: number) => {
        axiosInstance.get(`reservation/reservation-by-seatId/${seatId}`)
    }
}