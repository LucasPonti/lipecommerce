import './NavBar.css';
import liplogo from './liplogo.png'
const NavBar = () => {
    return (
        <nav className='miClase'>
            <div id='navigation' className='container'>
                <a href='index.html'><img src={liplogo} alt="Logotipo"/></a>
                <ul id="main-nav">    
                    <li><a className='btn' href=''>Productos</a></li>
                    <li><a className='btn' href=''>Ofertas</a></li>
                    <li><a className='btn' href=''>Otros</a></li>
                </ul>
                <a className='contacto' href=''>Contacto</a>
            </div>
        </nav>
    )
}

export default NavBar;