import React from "react";
import { Card, Image, Title, Price, Button, IconArea} from "./MovieElements";
import CartIcon from "../../Assets/Icons/CartIcon";
import {CartState} from "../../Context";
import {Product} from "../../Interfaces/Product";

function Movie({id,title, price, image, amount= 0}: Product) {
    const {
        dispatch
    } = CartState();

    return (
        <>
            <Card>
                <Image alt={"Capa do filme"} src={image}></Image>
                <Title>
                    {title}
                </Title>
                <Price>
                    R$ {price.toFixed(2).toString().replace(".",",")}
                </Price>
                <Button
                    onClick={()=>{
                        dispatch({
                            type:"ADD_TO_CART",
                            payload:{
                                id,
                                title,
                                price,
                                image
                            }
                        })
                    }}
                    $backgroundColor={amount>0?"#039B00":""}
                >
                    <IconArea>
                        <CartIcon/>
                        {amount}
                    </IconArea>
                    {
                        amount === 0 ? "ADICIONAR AO CARRINHO" : amount === 1 ? "ITEM ADICIONADO": "ITENS ADICIONADOS"
                    }
                </Button>
            </Card>
        </>
    );
}

export default Movie;