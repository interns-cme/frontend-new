import { SeatProps } from "./ISeat.model";

export interface TableProps {
  isTwoSided: boolean;
  Seats: SeatProps[];
  table_id: string;
}
