import { Box } from "@mui/material";
import React from "react";

const Room: React.FC = () => {
  return (
    <Box
      sx={{
        marginTop: "100px",
        border: "solid 1px",
        marginLeft: 0,
        width: "120px",
        height: "100px",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        backgroundImage:
          "linear-gradient(to bottom right, transparent 50%, rgba(255, 0, 0, 0.3) 50%)",
      }}
    ></Box>
  );
};

export default Room;
