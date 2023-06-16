import { SeatProps } from "../models/ISeat.model";
import axiosInstance from "../utils/axiosConfig";
import keycloak from "../utils/keycloak";

export const tableService = {
  getTableSeats: async () => {
    const tableId = keycloak?.tokenParsed?.preferred_username;
    return axiosInstance.get<SeatProps[]>(`/seat/seats-of-table/${tableId}`);
  },
};
