import CartItem from "../CartItem";
import {Button} from "./CartElements";
import React, {Dispatch, SetStateAction} from "react";
import {CartState} from "../../Context";
import {Product} from "../../Interfaces/Product";

interface Props {
	setIsFinished: Dispatch<SetStateAction<boolean>>;
}
const Cart = ({setIsFinished}:Props) =>{

	const {
		state: { cart },
		dispatch
	} = CartState();

	const finalizar = () =>{
		dispatch({type: "CLEAR_CART"})
		setIsFinished(true);
	}

	return(
		<>
			{cart.map((product:Product)=><CartItem key={product.id} {...product}/>)}

			<Button onClick={finalizar}>FINALIZAR</Button>
		</>
	)
}

export default Cart;