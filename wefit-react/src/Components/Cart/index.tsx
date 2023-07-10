import CartItem from "../CartItem";
import {Button, ItensArea, Hr, PriceArea, Footer, Header, HeaderText} from "./CartElements";
import React, {Dispatch, SetStateAction} from "react";
import {CartState} from "../../Context";
import {Product} from "../../Interfaces/Product";
import { Card } from "./CartElements";

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
		<Card>
			<Header>
				<HeaderText $gridArea={"a"}>
					PRODUTO
				</HeaderText>
				<HeaderText $gridArea={"b"}>
					QTD
				</HeaderText>
				<HeaderText $textAlign={"right"} $gridArea={"c"}>
					SUBTOTAL
				</HeaderText>
			</Header>
			<ItensArea >
				{cart.map((product:Product)=><CartItem key={product.id} {...product}/>)}
			</ItensArea>
			<Hr/>
			<Footer>
				<PriceArea>
					<div>TOTAL</div>
					<span>R$ {(cart.reduce((accumulator:any, currentValue:any)=>(accumulator + (currentValue.price * currentValue.amount )),0)).toFixed(2).toString().replace(".",",")}</span>
				</PriceArea>
				<Button onClick={finalizar}>FINALIZAR PEDIDO</Button>
			</Footer>
		</Card>
	)
}

export default Cart;