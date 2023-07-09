import React from 'react';
import {GlobalStyles} from "./globalStyles";
import NavBar from "./Components/NavBar";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <GlobalStyles/>
      <NavBar/>
      <div style={{padding:"0px 16px"}}>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
