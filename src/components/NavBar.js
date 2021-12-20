import './NavBar.css';
import liplogo from './liplogo.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import { CartContext } from './cartContext';
import { useContext } from 'react';


const NavBar = () => {

    const getCantidad = useContext(CartContext)

    return (
        <nav className='miClase'>
            <div id='navigation' className='container'>
                <Link to = {'/'} ><img src={liplogo} alt="Logotipo"/></Link>
                <ul id="main-nav"> 
                <Link to ={'/products'} className='Option'>Productos</Link>
                <Link to = {'/products'} className='Option'>
                    <ul>Categorias
                        <Link to={'category/Principiante'} className='Option'>Principiante</Link>
                        <Link to={'category/Intermedio'} className='Option'>Intermedio</Link>
                        <Link to={'category/Avanzado'} className='Option'>Avanzado</Link>
                    </ul></Link>
                </ul>
                <Link to='/cart'><CartWidget/></Link>
                
            </div>
        </nav>
    )
}

export default NavBar;