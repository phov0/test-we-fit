import {CartState} from "../../Context";
import {Product} from "../../Interfaces/Product";
import { ItemArea, Image } from "./CartItemElements";
import PlusIcon from "../../Assets/Icons/PlusIcon";
import MinusIcon from "../../Assets/Icons/MinusIcon";
import TrashIcon from "../../Assets/Icons/TrashIcon";

const CartItem = ({id,title, price, image, amount = 0}: Product) =>{

	const {
		state: { cart },
		dispatch
	} = CartState();


	const changeAmount = (newValue:number) =>{
		dispatch({
			type: "CHANGE_AMOUNT",
			payload:{
				id,
				amount:newValue
			}
		})
	}

	const removeItem = () =>{
		dispatch({
			type: "REMOVE_FROM_CART",
			payload:{
				id
			}
		})
	}

	return (
		<ItemArea>
			<Image alt={"Capa do filme"} src={image}/>
			<h2>{title}</h2>
			<h2>{price}</h2>
			<h2>{amount}</h2>
			<div onClick={()=>{changeAmount(amount-1)}}>
				<MinusIcon/>
			</div>
			<div onClick={()=>{changeAmount(amount+1)}}>
				<PlusIcon/>
			</div>
			<div onClick={removeItem}>
				<TrashIcon/>
			</div>
		</ItemArea>
	)
}

export default CartItem;