import { useState } from "react";
import { createContext } from "react";

export const useCart = createContext();

export default (props) => {
    const [cartProducts, setCartProducts] = useState ([]);

    const addCartProducts = () => {};
    const deleteCartProducts = () => {};

    
     return (
        <useCart.Provider 
            value={{cartProducts, addCartProducts,deleteCartProducts}}>
            {props.children}
        </useCart.Provider>
    );
};