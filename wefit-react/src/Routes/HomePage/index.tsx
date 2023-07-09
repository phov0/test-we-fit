import React from "react";
import Grid from "../../Components/Grid";
import Movie from "../../Components/Movie";
import {useLoaderData, useNavigation} from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import {Product} from "../../Interfaces/Product";
import {CartState} from "../../Context";
import axios from "axios";

const Home = ()=>{
  const {
    state: { cart },
  } = CartState();

  const products:any = useLoaderData();
  const { state } = useNavigation();

  const updatedProducts = products.map((product:Product)=>{
    const prodOnCart = cart.find((obj:Product) => obj.id === product.id);
    if(prodOnCart){
      return {...product, amount:prodOnCart.amount}
    }else{
      return product
    }
  })


  if(state == "loading"){
    return <><h2>CARREGANDO....</h2></>
  }

  return  <>
    <SearchBar/>
    <Grid>
      {
        updatedProducts.length > 0 ?
            updatedProducts.map((product:any)=><Movie key={product.id} {...product}/>) :
          <h2>Sem Produtos</h2>
      }
    </Grid>
  </>
}

export default Home;

export const productsLoader = async ({params}:any)=>{
  const { data } = await axios.get(`http://localhost:3000/products`);
  return data;
}