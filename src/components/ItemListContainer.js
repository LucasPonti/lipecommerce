import './ItemListContainer.css'
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from './firebase'

const ItemListContainer = ({greeting}) => {
   
    const {categoryId} = useParams();
    const[products, setProducts] = useState([]);
    
    console.log(categoryId)
    useEffect(() => {
        if(!categoryId) {
            getDocs(collection(db, 'productos')).then((querySnapshot) => {
                console.log('snap',querySnapshot)
                const prod = querySnapshot.docs.map(doc => {
                    console.log('doc',doc)
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(prod)
            }).catch((error) => {console.log('Error buscando items', error)})
        } else {
            getDocs(query(collection(db, 'productos'), where('categoria','==', categoryId))).then((querySnapshot) => {
                console.log('snap',querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log('doc',doc)
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {console.log('Error buscando items', error)})
        }
        

        return () => {
            setProducts([])
        }
    }, [categoryId])

    return (
        <div>
            <div className='greeting'>
            <h1>{greeting}</h1>
            </div>
            {categoryId !== '' ? 
            <ItemList products={products}/>
            :
            <ItemList products={products}/>
            }
        </div> 
    )
}

export default ItemListContainer;