import React from 'react'
import './Cart.css'
import {useContext} from 'react';
import {CartContext} from './cartContext'

const Cart = () => {
    
    const {cart} = useContext(CartContext);
    const {limpiarCarrito} = useContext(CartContext);
    const {eliminarElemento} = useContext(CartContext)

    

    return (
        <div className='tabla'>
            <table>
                <tr>
                    <th className='col'>Nombre</th>
                    <th className='col'>Precio</th>
                    <th className='col'>Cantidad</th>
                    <th className='col'>Eliminar</th>
                </tr>    
                <tbody>
                    {cart.map(producto => {
                        return <tr>
                            <td>{producto.item.nombre}</td>
                            <td>{producto.item.precio}</td>
                            <td>{producto.cantidad}</td>
                            <button onClick={ () => eliminarElemento(producto, producto.item.id)}>X</button>
                        </tr>
                        
                    })}
                
                </tbody>   
            </table> 
            <button onClick={limpiarCarrito}>Limpiar Carrito</button>   
        </div>
    )
}

export default Cart