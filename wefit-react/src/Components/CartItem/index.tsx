import {CartState} from "../../Context";
import {Product} from "../../Interfaces/Product";
import {
	ItemArea,
	Image,
	Details,
	Price,
	Title,
	SubTotal,
	Amount, SubTotalContainer, AmountContainer, IconContainer, TrashIconContainer
} from "./CartItemElements";
import PlusIcon from "../../Assets/Icons/PlusIcon";
import MinusIcon from "../../Assets/Icons/MinusIcon";
import TrashIcon from "../../Assets/Icons/TrashIcon";

const CartItem = ({id,title, price, image, amount = 0}: Product) =>{

	const {
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
			<Details>
				<Title>{title}</Title>
				<Price>R$ {price.toFixed(2).toString().replace(".",",")}</Price>
			</Details>
			<TrashIconContainer onClick={removeItem}>
				<TrashIcon/>
			</TrashIconContainer>
			<AmountContainer>
				<IconContainer onClick={()=>{changeAmount(amount-1)}}>
					<MinusIcon/>
				</IconContainer>
				<Amount>{amount}</Amount>
				<IconContainer onClick={()=>{changeAmount(amount+1)}}>
					<PlusIcon/>
				</IconContainer>
			</AmountContainer>
			<SubTotalContainer>
				<SubTotal>
					SUBTOTAL
				</SubTotal>
				<Price>
					R$ {(price * amount).toFixed(2).toString().replace(".", ",")}
				</Price>
			</SubTotalContainer>
		</ItemArea>
	)
}

export default CartItem;