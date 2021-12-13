import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'

const ItemDetail = ({nombre, id, imagen, descripcion, horas, inicio, fin, tutor, precio}) => {
   
    const cant = () => {
        console.log("Agregado al carrito");
    }

    return (
        <div className="cardDetalle">
            <h2>{nombre}</h2>
                <div>
                    <img src={imagen} alt={id} className="prodImagen"/>
                </div>     
                <div>
                    <p className="datos">{descripcion}</p>
                    <p className="datos">Duracion:{horas} horas</p>
                    <p className="datos">Fecha de inicio:{inicio}</p>
                    <p className="datos">Fecha de fin:{fin}</p>
                    <p className="datos">Tutor:{tutor}</p>
                    <p className="datos">Precio:{precio}</p>
                    <ItemCount stock ={5} initial = {1} onAdd={cant}/>
                </div>      
        </div>
    )
}

export default ItemDetail;
