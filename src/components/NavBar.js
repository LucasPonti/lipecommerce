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
                <Link to = {'/count'} className='Option'>Contador</Link>
                </ul>
                <a className='cartWidget' href=''><CartWidget/></a>
            </div>
        </nav>
    )
}

export default NavBar;