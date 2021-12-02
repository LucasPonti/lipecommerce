import './ItemListContainer.css'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getItem, getProductos } from './productos';
import { useState, useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

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

    const [item, setItem] = useState()
    const llave = 3;
    useEffect(() => {
        const element = getItem(llave)
        return () => {
            setItem();
        }
    }, [])

    return (
        <div>
            <div className='greeting'>
            <h1>{greeting}</h1>
            <ItemCount stock ={5} initial = {1} onAdd={onAdd}/>
            </div>
            <ItemList products={products}/>
            <ItemDetailContainer item={item}/>
        </div>
        
    )
}

export default ItemListContainer;