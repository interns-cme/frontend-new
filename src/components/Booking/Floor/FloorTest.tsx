import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Table from "../Table/Table"; // Import the Table component
import { FloorProps } from "../../../models/IFloor.model";

const Floor: React.FC<FloorProps> = ({ floor_number }) => {
  const [tables, setTables] = useState<string[]>([]); // State to hold the tables array

  useEffect(() => {
    // Fetch the tables array from the backend API
    const fetchTables = async () => {
      try {
        const response = await axios.get("/api/tables", {
          data: { floor_number }, // Send the floor_number in the request body
        });
        setTables(response.data.tables);
      } catch (error) {
        console.log("Error fetching tables:", error);
      }
    };

    fetchTables();
  }, [floor_number]); // Fetch tables when floor_number changes

  return (
    <Box sx={{ margin: "0 auto" }}>
      {floor_number === "7" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: "solid 1px",
              backgroundColor: "#D5C3B4",
              p: 2,
              width: "min-content",
              height: "800px",
              m: 2,
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              {/* Render the Table components based on the tables array */}
              {tables.map((tableId) => (
                <Table
                  key={tableId}
                  table_id={tableId}
                  isTwoSided={false}
                  Seats={[]}
                />
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: "solid 1px",
              backgroundColor: "#D5C3B4",
              p: 2,
              width: "min-content",
              height: "750px",
              m: 2,
              paddingBottom: 0,
            }}
          >
            {/* Render the Table components based on the tables array */}
            {tables.map((tableId) => (
              <Table
                key={tableId}
                table_id={tableId}
                isTwoSided={false}
                Seats={[]}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Floor;
