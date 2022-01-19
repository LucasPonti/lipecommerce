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
                <Link to ={'/products'} className='Option'>Capsulas</Link>
                <Link to = {'/products'} className='Option'>
                    <ul>
                        <Link to={'category/Suave'} className='Option'>Suave</Link>
                        <Link to={'category/Equilibrado'} className='Option'>Equilibrado</Link>
                        <Link to={'category/Intenso'} className='Option'>Intenso</Link>
                    </ul></Link>
                </ul>
                <Link to='/cart'><CartWidget/></Link>
                
            </div>
        </nav>
    )
}

export default NavBar;