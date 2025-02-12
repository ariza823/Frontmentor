import { useState } from "react";
import { createContext } from "react";

export const useCartDetails = createContext();

export default (props) => { 
   const [CarProducts, setProducts] = useState ([]);

   const addCartProducts = (product) => {
    setProducts([...CarProducts, product])

   };
   const deleteCartProducts = () => { }

    return (
        <useCartDetails.Provider value={{ CarProducts,addCartProducts, deleteCartProducts  }}>
            {props.children}
        </useCartDetails.Provider>
    );
 };
