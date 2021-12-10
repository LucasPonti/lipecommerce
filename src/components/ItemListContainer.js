import './ItemListContainer.css'
import ItemList from './ItemList';
import {getProductos } from './productos';
import { useState, useEffect } from 'react';

const ItemListContainer = ({greeting}) => {
   

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
            </div>
            <ItemList products={products}/>
        </div> 
    )
}

export default ItemListContainer;