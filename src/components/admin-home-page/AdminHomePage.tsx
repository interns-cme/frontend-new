import { Box, CardMedia, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Statistics from "../../assets/statistics.jpg";
import Booking from "../../assets/booking.jpg";
import FloorMap from "../../assets/floormap.jpg";
import History from "../../assets/history.png";

function AdminHomePage() {
  const navigate = useNavigate();

  const handleStatisticsClick = () => {
    navigate("/admin-statistics");
  };

  const handleBookingsClick = () => {
    navigate("/admin-bookings");
  };

  const handleEditFloorClick = () => {
    navigate("/admin-floor");
  };

  const handleHistoryClick = () => {
    navigate("/admin-history");
  };

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        height="400px"
      >
        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            margin: "3.5rem",
            cursor: "pointer",
            transition: "transform 0.3s ease-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={handleStatisticsClick}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 800 }}
            align="center"
            gutterBottom
          >
            Statistics
          </Typography>
          <CardMedia
            sx={{
              width: "100%",
              height: "78%",
            }}
            component="img"
            image={Statistics}
          />
        </Paper>

        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            margin: "3.5rem",
            cursor: "pointer",
            backgroundColor: "#fafafa",
            transition: "transform 0.3s ease-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={handleBookingsClick}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 800 }}
            align="center"
            gutterBottom
          >
            Reservations
          </Typography>
          <CardMedia
            sx={{
              width: "88%",
              height: "78%",
              backgroundColor: "#ffff",
            }}
            component="img"
            image={Booking}
          />
        </Paper>

        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            margin: "3.5rem",
            cursor: "pointer",
            backgroundColor: "#fafafa",
            transition: "transform 0.3s ease-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={handleHistoryClick}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 800 }}
            align="center"
            gutterBottom
          >
            History
          </Typography>
          <CardMedia
            sx={{
              width: "85%",
              height: "80%",
            }}
            component="img"
            image={History}
          />
        </Paper>

        <Paper
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            margin: "3.5rem",
            cursor: "pointer",
            backgroundColor: "#ffff",
            transition: "transform 0.3s ease-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={handleEditFloorClick}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 800 }}
            align="center"
            gutterBottom
          >
            Edit Floor
          </Typography>
          <CardMedia
            sx={{
              width: "90%",
              height: "78%",
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
