import './ItemListContainer.css'
import ItemList from './ItemList';
import {getProductbyCategory, getProductos } from './productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
   
    const [cursos, setCursos] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        (async () => {
            if (categoryId !== undefined) {
                const prod  = await getProductbyCategory(categoryId);
                setCursos(prod)
            } else {
                const prod = await getProductos()
                setCursos(prod)
            } 
        })()
    }, [categoryId])
    
    console.log(categoryId);


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
            {categoryId !== '' ? 
            <ItemList products={cursos}/>
            :
            <ItemList products={products}/>
            }
        </div> 
    )
}

export default ItemListContainer;