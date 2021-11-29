import './ItemListContainer.css'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getProductos } from './productos';
import { useState, useEffect } from 'react';

const ItemListContainer = ({greeting}) => {
    const onAdd = () => {
        console.log("Agregado al carrito");
    }

    const[products, setProducts] = useState([])

    useEffect(() => {
        const lista = getProductos()
        lista.then(lista => {
            setProducts(lista)
        })
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <div>
            <div className='greeting'>
            <h1>{greeting}</h1>
            <ItemCount stock ={5} initial = {1} onAdd={onAdd}/>
            </div>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer;