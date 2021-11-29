import './Item.css'

const Item = (product) => {
    return (
        <div className = "Item">
            <div className = "Container"> 
                <h2 className = "Nombre">{product.nombre}</h2>
            </div>
            <img src={product.imagen} alt={product.id} classname="prodImagen"/>
            <p className="datos">Precio:{product.precio}</p>
            <button className="botn">Ver Producto</button>
        </div>

    )
}

export default Item;