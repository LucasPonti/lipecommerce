import Item from "./Item"
import './ItemList.css'


const ItemList = ({products}) => {
    return (
        <div className="caja"> 
            {products.map((prod) => { return(<Item key={prod.id} nombre = {prod.nombre} precio = {prod.precio} imagen = {prod.imagen} id={prod.id}/>)})}
        </div>
    )
}

export default ItemList;