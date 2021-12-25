import './NavBar.css';
import liplogo from './liplogo.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'


const NavBar = () => {

    return (
        <nav className='miClase'>
            <div id='navigation' className='container'>
                <Link to = {'/'} ><img src={liplogo} alt="Logotipo"/></Link>
                <ul id="main-nav"> 
                <Link to ={'/products'} className='Option'>Productos</Link>
                <Link to = {'/products'} className='Option'>
                    <ul>
                        <Link to={'category/principiante'} className='Option'>Principiante</Link>
                        <Link to={'category/intermedio'} className='Option'>Intermedio</Link>
                        <Link to={'category/avanzado'} className='Option'>Avanzado</Link>
                    </ul></Link>
                </ul>
                <Link to='/cart'><CartWidget/></Link>
                
            </div>
        </nav>
    )
}

export default NavBar;