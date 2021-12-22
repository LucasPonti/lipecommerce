import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { getProductbyId } from './productos'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        (async () => {
            const product = await getProductbyId(productId);
            setProduct(product)
        })()
        
    }, [productId])

    
    return (
        <div className='itemDetailContainer'>
           {<ItemDetail  product = {product}/>}
        </div>
    )
}

export default ItemDetailContainer;
