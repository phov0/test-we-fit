import {Product} from "../Interfaces/Product";

export const cartReducer = (state:any, action:any)=>{
    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cart:[]};
        case "ADD_TO_CART":
            if(state.cart.some((product:Product) => action.payload.id === product.id)) return state
            return { ...state, cart:[...state.cart, {...action.payload, amount: 1}]};
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart:state.cart.filter((product:Product) => product.id !== action.payload.id)
            };
        case "CHANGE_AMOUNT":
            return {
                ...state,
                cart:state.cart.filter(
                    (product:Product) => product.id === action.payload.id ? (product.amount = action.payload.amount) : product.amount
                )
            };
        case "SET_PRODUCTS_LENGTH":
            return { ...state, products:{length:action.payload}};
        default:
            return state;
    }
}