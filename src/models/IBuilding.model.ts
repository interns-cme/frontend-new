import { FloorProps } from "./IFloor.model";

export interface BuildingProps {
  name: string;
  id: number;
  floors: FloorProps[];
}
