import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const MainContext = createContext();

const Index = (props) => {
    const [cart,setCart] = useState([]);
     const [products,setProducts] = useState([]);

     useEffect(
        () => {
            axios.get("https://fakestoreapi.com/products")
            .then(
            (success) => {
                 setProducts(success.data)
            }
            )
            .catch(
              (error) => {
      
              }
            )
        },
        []
     )

    const addToCart = (pId) => {
        if (cart.indexOf(pId) == -1) {
            setCart([...cart,pId]);
        }
    }

    const removeFromCart = (pId) => {

    }
    return (
        <MainContext.Provider value={{ products,cart,addToCart,removeFromCart}}>
            {props.children}
        </MainContext.Provider>
    );
}

export default Index;
export {MainContext};
