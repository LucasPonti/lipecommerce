import Item from "./Item"
import './ItemList.css'


const ItemList = ({products}) => {
    return (
        <div className="caja"> 
            {products.map(product => { return(<Item key={product.id} nombre = {product.nombre} precio = {product.precio} imagen = {product.imagen}/>)})}
        </div>
    )
}

export default ItemList;