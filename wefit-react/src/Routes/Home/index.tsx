import React from "react";
import {Outlet} from "react-router-dom";
import SearchBar from "../../Components/SearchBar";

const Home = ()=>{

  return  <>
    <SearchBar />
    <Outlet/>
  </>
}

export default Home;

