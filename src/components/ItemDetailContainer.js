import ItemDetail from './ItemDetail'

const ItemDetailContainer = (item) => {
    return (
        <div>
            <ItemDetail nombre={item.nombre} descripcion = {item.descripcion} precio = {item.precio} />
        </div>
    )
}

export default ItemDetailContainer
