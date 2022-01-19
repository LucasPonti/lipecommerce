import cart from './cart.png'
import './CartWidget.css'
import {CartContext} from './cartContext'
import { useContext } from 'react';


const CartWidget = () => {

   const {getCantidad} = useContext(CartContext)

    return (
        <div className='logocart'>
            <a href=''><img className='cart' src={cart} alt="cart"/></a>
            <p className='canttotal'>{getCantidad()}</p>
        </div>
    );
}

export default CartWidget;
