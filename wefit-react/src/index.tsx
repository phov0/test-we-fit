import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from "./Context";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home, {productsLoader} from "./Routes/HomePage";
import axios from "axios";
import Cart from "./Routes/CartPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: async ()=> {
          const {data} = await axios.get(`http://localhost:3000/products`);
          return data;
        }
      },
      {
        path:"/:title",
        element:<Home/>,
        loader: async ({params}:any)=>{
           const { data } = await axios.get(`http://localhost:3000/products?q=${params.title}`);
           return data;
         },
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}/>
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
