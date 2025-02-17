import { useState } from "react";  
import { createContext } from "react";  

export const useCartDetails = createContext();  // Crea un contexto que será utilizado en otros componentes 

export default (props) => {   
   const [ CarProducts, setProducts ] = useState([]);  // Inicializa el estado "CarProducts" con un array vacío 

   // Función que agrega productos al carrito.
   const addCartProducts = (product) => {
      if (CarProducts.length === 0) {  
         return setProducts([...CarProducts, product]);
      }
     
      CarProducts( 
        setProducts.map((item) => {  
            if (item.id === product.id) {  // Si el producto ya existe en el carrito (por ID), actualiza su cantidad.
                return {...item, quantity: item.quantity + 1};
            } else {
                return item;  // Si no, retorna el producto tal como está.
            }
        })
      );
   };

   // Función que elimina un producto del carrito según su ID.
   const deleteCartProducts = (id) => {
      setProducts(CarProducts.filter(item => item.id !== id));  
   };

   // Calcula la cantidad total de productos en el carrito.
   const totalQuantityProduct = CarProducts.reduce(
    (acc, current) => current.quantity + acc,  
    0  
   );

   
   return (
        <useCartDetails.Provider value={{ CarProducts, addCartProducts, deleteCartProducts, totalQuantityProduct }}>
            {props.children}  
        </useCartDetails.Provider>
    );
 };
