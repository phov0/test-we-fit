import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyles} from "./globalStyles";
import NavBar from "./Components/NavBar";
import Grid from "./Components/Grid";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <NavBar/>
      <Grid/>
    </Router>
  );
}

export default App;
