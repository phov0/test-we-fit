import EmptyCart from "../../Components/EmptyCart";
import OrderSuccess from "../../Components/OrderSuccess";
import {CartState} from "../../Context";
import React, {useState} from "react";
import Cart from "../../Components/Cart";


const CartPage = () =>{

    const {
        state: { cart }
    } = CartState();

    const [isFinished, setIsFinished] = useState(false);

    if(cart.length > 0 ) return <Cart setIsFinished={setIsFinished}/>

    if(isFinished) return <OrderSuccess/>

    return <EmptyCart/>
}

export default CartPage;