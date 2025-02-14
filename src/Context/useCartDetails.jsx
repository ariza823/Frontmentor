import { useState } from "react";
import { createContext } from "react";

export const useCartDetails = createContext();

export default (props) => { 
   const [ CarProducts, setProducts ] = useState ([]);

   const addCartProducts = (product) => {if(CarProducts.length === 0){ 
   return setProducts([...CarProducts, product]);
    }
    CarProducts(
        setProducts.map((item) => {
        if (item.id === product.id) {
            return {...item, quantity: item.quantity + 1}
            } else {
            return item;
        }
      })
    );

   };
   const deleteCartProducts = (id) => {
    setProducts(CarProducts.filter(item => item.id !== id))
   };
   const totalQuantityProduct = CarProducts.reduce(
    (acc, current) => current.quantity + acc, 
    0
   );

    return (
        <useCartDetails.Provider value={{ CarProducts,addCartProducts, deleteCartProducts, totalQuantityProduct  }}
    >
            {props.children}
        </useCartDetails.Provider>
    );
 };
