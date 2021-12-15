import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { getProductbyId } from './productos'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(() => {
       getProductbyId(productId).then(prod => {
           setProduct(prod)
           console.log('aqui ', prod.nombre)
       }).catch(err => {
           console.log(err)
       })
        return () => {
            setProduct()
        }
    }, [productId])

    const {nombre, id, imagen, descripcion, horas, inicio, fin, tutor, precio, stock} = product;


    return (
        <div className='itemDetailContainer'>
           {<ItemDetail  nombre={nombre} id ={id} imagen={imagen} descripcion={descripcion} horas={horas} inicio={inicio} fin={fin} tutor={tutor} precio={precio} stock ={stock} inputType='button'/>}
        </div>
    )
}

export default ItemDetailContainer;
