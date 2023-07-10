import {createContext, ReactNode,useReducer, useContext} from "react";
import {cartReducer} from "./Reducers";

const Cart = createContext<any>({});

interface Props {
    children:ReactNode
}
const Context = ({ children }:Props)=>{

    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
        products:{
            length:0
        }
    })

    return <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
}

export default Context;

export const CartState = ()=>{
    return useContext(Cart);
}