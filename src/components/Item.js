import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({nombre, precio, imagen, id}) => {
    return (
        <div className = "Item">
            <div className = "Container"> 
                <h2 className = "Nombre">{nombre}</h2>
            </div>
            <img src={imagen} alt={id} className="prodImagen"/>
            <p className="datos">Precio:{precio }</p>
            <Link to = {`/detail/${id}`} className='Option'>Detalle</Link>
        </div>
    )
}

export default Item;