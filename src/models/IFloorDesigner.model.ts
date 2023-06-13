import { TableProps } from "./ITable.model";

export interface FloorDesignProps {
    tables: TableProps[];
    width: string;
    height: string;
    columns: number;
    rows: number;
  }