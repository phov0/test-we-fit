import React, {useEffect, useState} from "react";
import { Card, Image, Title, Price, Button, IconArea} from "./MovieElements";
import CartIcon from "../../Assets/Icons/CartIcon";
import {CartState} from "../../Context";
import {Product} from "../../Interfaces/Product";



function Movie({id,title, price, image, amount= 0}: Product) {
  const {
    state: { cart },
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
            R$ {price}
          </Price>
          <Button onClick={()=>{
            dispatch({
              type:"ADD_TO_CART",
              payload:{
                id,
                title,
                price,
                image
              }
            })
          }}>
            <IconArea>
              <CartIcon/>
              {amount}
            </IconArea>
            {
              cart.some((product:Product) => id === product.id)?
                  "REMOVER DO CARRINHO"
                  :
                  "ADICIONAR AO CARRINHO"
            }

          </Button>
        </Card>
      </>

  );
}

export default Movie;