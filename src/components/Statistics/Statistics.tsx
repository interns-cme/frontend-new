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

const dummyStatisticsData = {
  mostReservedSeat: "A1",
  floorWithMostReservations: "Floor 3",
  leastReservedSeat: "B4",
  leastFrequentDay: "Saturday",
  mostFrequentDay: "Wednesday",
  totalReservations: 500,
};

const Statistics: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Statistics
      </Typography>

      <Box display="flex" flexWrap="wrap">
        {Object.entries(dummyStatisticsData).map(([statName, statValue]) => (
          <Box key={statName} width="50%" mb={2}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {statName}
              </Typography>
              <Typography variant="body1">{statValue}</Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Statistics;
