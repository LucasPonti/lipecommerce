import cart from './cart.png'
import './CartWidget.css'
const CartWidget = () => {

    return (
        <div className='logocart'>
            <a href=''><img className='cart' src={cart} alt="cart"/></a>
            <p className='cant'>0</p>
        </div>
    );
}

export default CartWidget;
