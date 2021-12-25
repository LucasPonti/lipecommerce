import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div className = "Item">
            <div className = "Container"> 
                <h2 className = "Nombre">{product.nombre}</h2>
            </div>
            <img src={product.imagen} alt={product.id} className="prodImagen"/>
            <p className="datos">Precio:{product.precio }</p>
            <Link to = {`/detail/${product.id}`} className='Option'>Detalle</Link>
        </div>
    )
}

export default Item;