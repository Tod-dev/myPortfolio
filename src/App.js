import React from "react";
import Container from "react-bootstrap/Container";

import "./App.css";
import WorkInProgressPage from "./pages/WorkInProgressPage";

function App() {
  return (
    <Container className="App">
      <WorkInProgressPage />
    </Container>
  );
}

export default App;
