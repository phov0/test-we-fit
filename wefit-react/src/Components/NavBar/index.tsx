import React from "react";
import {CartBtn, Nav, NavLink} from "./NavbarElements";
import BagIcon from "../../Assets/Icons/BagIcon";
import {CartState} from "../../Context";

function NavBar() {
    const {
        state: { cart },
        dispatch
    } = CartState();

    return (
        <Nav>
            <NavLink to={"/"}>WeMovies</NavLink>
            <CartBtn to={"/cart"}>
                <p>{cart.length} itens</p>
                <BagIcon/>
            </CartBtn>
        </Nav>
    );
}

export default NavBar;