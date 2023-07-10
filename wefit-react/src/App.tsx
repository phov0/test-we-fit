import React from 'react';
import {GlobalStyles} from "./globalStyles";
import NavBar from "./Components/NavBar";
import {Outlet} from "react-router-dom";
import Content from "./Components/Content";

function App() {

    return (
        <>
            <GlobalStyles/>
            <NavBar/>
            <Content>
                <Outlet/>
            </Content>
        </>
    );
}

export default App;
