import React from "react";
import {Nav, NavLink} from "./NavbarElements";

function NavBar() {
    return (
        <>
            <Nav>
                <NavLink to={"/"}>Nav</NavLink>
            </Nav>
        </>
    );
}

export default NavBar;