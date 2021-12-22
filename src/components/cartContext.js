import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [cart, setCart] = useState([])

    const getCantidad = () => {
        let subTotal = 0;
        cart.forEach(elemento => {
            console.log(elemento);
            subTotal += elemento.cantidad;
        })
        return subTotal;
    }

    const addItem = (producto, cantidad) => {
        const estaEnCarrito = enCarrito(producto);
        console.log(estaEnCarrito);
        if(estaEnCarrito){
            let productoRepetido = cart.find (elemento => elemento.item === producto);
            productoRepetido.cantidad += cantidad;
            let cartNoRepetido = cart.filter (elemento => elemento.item !== producto);
            setCart([...cartNoRepetido, productoRepetido])
        } else {
            setCart([...cart, {item: producto, cantidad: cantidad}]);
        }
    } 

    const enCarrito = (item) => {
        console.log(item);
        return cart.some(producto => producto.item === item);
    }

    const eliminarElemento = (producto, id) => {
       
        console.log('elementoEliminado')
        console.log(producto)
        console.log(id)
        let arrayAux = cart.filter(elemento => elemento.item.id !== id)
        setCart(arrayAux)  
      
       
    }

    const limpiarCarrito = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart ,getCantidad, totalCarrito, addItem ,eliminarElemento, limpiarCarrito}}>
        {children}
        </CartContext.Provider>
    )
    

}


export default CartContextProvider;
