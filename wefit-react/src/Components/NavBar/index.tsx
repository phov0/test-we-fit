import React from "react";
import {CartBtn, Nav, NavLink, TextArea} from "./NavbarElements";
import BagIcon from "../../Assets/Icons/BagIcon";
import {CartState} from "../../Context";

function NavBar() {
    const {
        state: { cart }
    } = CartState();

    return (
        <Nav>
            <NavLink to={"/"}>WeMovies</NavLink>
            <CartBtn to={"/cart"}>
                <TextArea>
                    <div>Meu Carrinho</div>
                    <p>{cart.length === 1 ? `${cart.length} item` : `${cart.length} itens`} </p>
                </TextArea>
                <BagIcon/>
            </CartBtn>
        </Nav>
    );
}

export default NavBar;