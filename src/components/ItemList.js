import Item from "./Item"
import './ItemList.css'


const ItemList = ({products}) => {
    return (
        <div className="contcaja">
            <div className="caja"> 
                {products.map((prod) => { return <Item  product = {prod} key={prod.id} />})}
            </div>
        </div>
    )
}

export default ItemList;