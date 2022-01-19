import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { getDoc, doc } from 'firebase/firestore'
import {db} from './firebase'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(() => {
       getDoc(doc(db, 'productos', productId)).then((querySnapshot) => {
           const prod = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(prod)
        }).catch((error) => {console.log('Error buscando producto', error)})



       return (() => {
           setProduct()
       })
        
        
    }, [productId])

    
    return (
        <div className='itemDetailContainer'>
           {<ItemDetail  product = {product}/>}
        </div>
    )
}

export default ItemDetailContainer;
