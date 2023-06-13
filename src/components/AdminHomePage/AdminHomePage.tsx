import "./AdminHomePage.css";
import { Box, CardMedia, Paper, Typography } from "@mui/material";

function AdminHomePage() {
  function handleStatisticsClick(): void {
    throw new Error("Function not implemented.");
  }

  function handleDashboardClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Typography variant="h2" sx={{ marginTop: "90px" }}>
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
            backgroundImage: "url(./Office.jpg) no-repeat cover",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            m: 1,
            cursor: "pointer",
            marginRight: "15rem",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-out",
            },
          }}
          onClick={() => handleDashboardClick()}
        >
          <Typography variant="h4" sx={{ marginTop: "0px" }}>
            Statistics
          </Typography>
          <CardMedia component="img" height="140" image="./Office.jpg" />
        </Paper>

        <Paper
          sx={{
            width: "250px",
            height: "250px",
            backgroundColor: "#f5f0f8",
            borderRadius: "0 0 50% 50% / 20% 20% 0 0",
            padding: "16px",
            m: 1,
            cursor: "pointer",
            marginLeft: "10px",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-out",
              marginLeft: "50px",
            },
          }}
          onClick={() => handleStatisticsClick()}
        >
          <h3>Floor 8</h3>
          <CardMedia
            component="img"
            height="140"
            image="../../assets/Office.jpg"
          />
        </Paper>
      </Box>
    </div>
  );
}

export default AdminHomePage;
