import Item from "./Item"
import './ItemList.css'


const ItemList = ({products}) => {
    return (
        <div className="caja"> 
            {products.map((prod) => { return <Item product = {prod} key={prod.id} />})}
        </div>
    )
}

export default ItemList;