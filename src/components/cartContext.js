import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [totalCarrito, setTotalCarrito] = useState(0);

    const getCantidad = (value) => {
        let subTotal = value;
        setTotalCarrito(subTotal)
        return subTotal;
    }

    return(
        <CartContext.Provider value={{getCantidad, totalCarrito}}>
        {children}
        </CartContext.Provider>
    )
    

}


export default CartContextProvider;
