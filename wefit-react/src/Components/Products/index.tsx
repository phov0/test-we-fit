import Movie from "../Movie";
import Grid from "../Grid";
import React, {useLayoutEffect, useMemo} from "react";
import {useLoaderData, useNavigation} from "react-router-dom";
import {Product} from "../../Interfaces/Product";
import Loading from "../Loading";
import {CartState} from "../../Context";

const Products = () =>{
    const {
        state: { cart },
        dispatch
    } = CartState();

    const products:any = useLoaderData();
    const { state } = useNavigation();

    useLayoutEffect(()=>{
        dispatch({
            type:"SET_PRODUCTS_LENGTH",
            payload:products.length
        })
    },[products.length]);

    const updatedProducts = useMemo(
        ()=>(
            products.map((product:Product)=>{
            const prodOnCart = cart.find((obj:Product) => obj.id === product.id);
            if(prodOnCart){
                return {...product, amount:prodOnCart.amount}
            }else{
                return product
            }
        }))
        ,[cart]);

    if(state === "loading"){
        return <Loading/>
    }
    return(
        <Grid>
            {
                updatedProducts.length > 0 ?
                    updatedProducts.map((product:any)=><Movie key={product.id} {...product}/>) :
                    <h2>Sem Produtos</h2>
            }
        </Grid>
    )
}

export default Products;