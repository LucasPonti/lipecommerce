import cart from './cart.png'
import './CartWidget.css'
import {CartContext} from './cartContext'
import { useContext } from 'react';


const CartWidget = () => {

   const {totalCarrito} = useContext(CartContext)

    return (
        <div className='logocart'>
            <a href=''><img className='cart' src={cart} alt="cart"/></a>
            <p>{totalCarrito}</p>
        </div>
    );
}

export default CartWidget;
