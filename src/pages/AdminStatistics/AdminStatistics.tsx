// import { Box, Paper, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Statistics: React.FC = () => {
//   const [statisticsData, setStatisticsData] = useState<any>(null);

//   useEffect(() => {
//     const fetchStatisticsData = async () => {
//       try {
//         const response = await axios.get("/api/statistics");
//         setStatisticsData(response.data);
//       } catch (error) {
//         console.error("Error fetching statistics data:", error);
//       }
//     };

//     fetchStatisticsData();
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Statistics
//       </Typography>

//       {statisticsData ? (
//         <Box display="flex" flexWrap="wrap">
//           {Object.entries(statisticsData).map(([statName, statValue]) => (
//             <Box key={statName} width="50%" mb={2}>
//               <Paper elevation={3} sx={{ p: 2 }}>
//                 <Typography variant="h6" gutterBottom>
//                   {statName}
//                 </Typography>
//                 <Typography variant="body1">{statValue}</Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//       ) : (
//         <Typography variant="body1">Loading statistics...</Typography>
//       )}
//     </Box>
//   );
// };

// export default Statistics;

import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ReservationChart from "../../components/Statistics/ReservationChart";

const Statistics: React.FC = () => {
  const chartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Reservations per day",
        data: [20, 15, 30, 25, 18, 22, 17],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const chartData2 = {
    labels: ["Floor 7", "Floor 8"],
    datasets: [
      {
        label: "Reservations per Floor",
        data: [20, 32],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box>
      <h1
        style={{
          marginBottom: "2rem",
          textDecoration: "underline dotted",
          fontSize: "2.6rem",
        }}
      >
        Statistics
      </h1>

      <Box display="flex" flexWrap="wrap">
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Number of Reservations
            </Typography>
            <Typography variant="body1">500</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Most Reserved Seat
            </Typography>
            <Typography variant="body1">A1</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Floor with Most Reservations
            </Typography>
            <Typography variant="body1">Floor 3</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Least Reserved Seat
            </Typography>
            <Typography variant="body1">B4</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Least Frequent Day
            </Typography>
            <Typography variant="body1">Saturday</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Most Frequent Day
            </Typography>
            <Typography variant="body1">Wednesday</Typography>
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Reservations per day
            </Typography>
            <ReservationChart chartData={chartData} />
          </Paper>
        </Box>
        <Box width="50%" mb={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Reservations per Floor
            </Typography>
            <ReservationChart chartData={chartData2} />
          </Paper>
        </Box>
        {/* Add more static cards as needed */}
      </Box>
    </Box>
  );
};

export default Statistics;
