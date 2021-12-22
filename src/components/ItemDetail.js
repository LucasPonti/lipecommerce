import React from 'react'
import './ItemDetail.css'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './cartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
   
    const {addItem} = useContext(CartContext)

    const [comprar, setComprar] = useState(false)
    const [cant, setCant] = useState(0);

    const handleComprar = (cant) => {
        setComprar(true);
        setCant(cant);
    }

    const handleEquipar = () => {
        addItem(product, cant)
    }
    
  

    return (
        <div className="cardDetalle">
            <h2>{product.nombre}</h2>
                <div>
                    <img src={product.imagen} alt={product.id} className="prodImagen"/>
                </div>     
                <div>
                    <p className="datos">{product.descripcion}</p>
                    <p className="datos">Duracion:{product.horas} horas</p>
                    <p className="datos">Fecha de inicio:{product.inicio}</p>
                    <p className="datos">Fecha de fin:{product.fin}</p>
                    <p className="datos">Tutor:{product.tutor}</p>
                    <p className="datos">Precio:{product.precio}</p>
                    {!comprar ? 
                    <ItemCount stock = {product.stock} onAdd = {(cant)=> handleComprar(cant)}/> 
                    :
                     <button onClick={handleEquipar}><Link to='/cart'>Finalizar</Link></button>}
                </div>      
        </div>
    )
}

export default ItemDetail;
