import './ItemListContainer.css'
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    const onAdd = () => {
        console.log("Agregado al carrito");
    }


    return (
        <div className='greeting'>
            <h1>{greeting}</h1>
            <ItemCount stock ={5} initial = {1} onAdd={onAdd}/>
        </div>
        
    )
}

export default ItemListContainer;