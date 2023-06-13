import { Box, CardMedia, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Statistics from "../../assets/statistics.jpg";
import Booking from "../../assets/booking.jpg";
import FloorMap from "../../assets/floormap.jpg";
import History from "../../assets/history.png";

function AdminHomePage() {
  const navigate = useNavigate();

  function handleStatisticsClick(): void {
    navigate("/admin-statistics");
  }

  function handleBookingsClick(): void {
    navigate("/admin-bookings");
  }

  function handleEditFloorClick(): void {
    navigate("/admin-floor");
  }

  function handleHistoryClick(): void {
    navigate("/admin-history");
  }

  return (
    <Container>
      <Typography variant="h2" sx={{ marginTop: "50px" }}>
        Admin Dashboard
      </Typography>
      <Box
        display="flex"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            m: 1,
            cursor: "pointer",
            marginLeft: "10rem",
            marginRight: "15rem",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-out",
            },
          }}
          onClick={handleStatisticsClick}
        >
          <Typography variant="h4" sx={{ fontWeight: "800px" }}>
            Statistics
          </Typography>
          <CardMedia
            sx={{
              width: "100%",
              height: "88%",
            }}
            component="img"
            image={Statistics}
          />
        </Paper>

        <Paper
          sx={{
            width: "240px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            m: 1,
            cursor: "pointer",
            marginRight: "15rem",
            backgroundColor: "#fafafa",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-out",
            },
          }}
          onClick={handleBookingsClick}
        >
          <Typography variant="h4" sx={{ fontWeight: "800px" }}>
            Reservations
          </Typography>
          <CardMedia
            sx={{
              width: "88%",
              height: "88%",
              backgroundColor: "#ffff",
            }}
            component="img"
            image={Booking}
          />
        </Paper>
      </Box>

      <Box
        display="flex"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            m: 1,
            cursor: "pointer",
            marginLeft: "10rem",
            marginRight: "15rem",
            backgroundColor: "#fafafa",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-out",
            },
          }}
          onClick={handleHistoryClick}
        >
          <Typography variant="h4" sx={{ fontWeight: "800px" }}>
            History
          </Typography>
          <CardMedia
            sx={{
              width: "90%",
              height: "75%",
            }}
            component="img"
            image={History}
          />
        </Paper>

        <Paper
          sx={{
            width: "240px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            m: 1,
            cursor: "pointer",
            marginRight: "15rem",
            backgroundColor: "#ffff",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-out",
            },
          }}
          onClick={handleEditFloorClick}
        >
          <Typography variant="h4" sx={{ fontWeight: "800px" }}>
            Edit Floor
          </Typography>
          <CardMedia
            sx={{
              width: "90%",
              height: "88%",
              backgroundColor: "#ffff",
            }}
            component="img"
            image={FloorMap}
          />
        </Paper>
      </Box>
    </Container>
  );
}

export default AdminHomePage;
