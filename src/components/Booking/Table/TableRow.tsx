import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FloorDesignProps } from "../../../models/IFloorDesigner.model";
import Table from "./Table";
const TableRow: React.FC<FloorDesignProps> = ({
  tables,
  width,
  height,
  columns,
  rows,
}) => {
  const generateTables = () => {
    return tables.map((table, index) => <Table key={index} {...table} />);
  };

  const generateEmptyTables = () => {
    const emptyTables = Array.from({ length: rows * columns });
    return emptyTables.map((_, index) => (
      <Table key={index} Seats={[]} table_id={"0"} isTwoSided={true} />
    ));
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "solid 1px",
          backgroundColor: "#D5C3B4",
          p: 2,
          width: width,
          height: "min-content",
          m: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {generateTables()}
          {tables.length > 1 && <Divider />}
          {generateEmptyTables()}
        </Box>
      </Box>
    </Box>
  );
};

export default TableRow;
