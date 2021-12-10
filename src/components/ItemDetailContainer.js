import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { getProductbyId } from './productos'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState()
   

    useEffect(() => {
       getProductbyId(productId).then(item => {
           setProduct(item)
       }).catch(err => {
           console.log(err)
       })
        return () => {
            setProduct()
        }
    }, [productId])

    


    return (
        <div className='itemDetailContainer'>
           {<ItemDetail item={product}/>}
        </div>
    )
}

export default ItemDetailContainer;
