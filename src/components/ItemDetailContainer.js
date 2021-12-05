import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({item}) => {
    return (
        <div>
           {<ItemDetail key={item.id} nombre = {item.nombre} precio = {item.precio} imagen = {item.imagen} fin = {item.fin} inicio = {item.inicio} tutor = {item.tutor} descripcion = {item.descripcion}/>}
        </div>
    )
}

export default ItemDetailContainer
