import { Container } from "@mui/material";
import "./App.css";
import RoutesHandler from "./routes/RoutesHandler";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <RoutesHandler />
      </Container>
    </>
  );
}

export default App;
