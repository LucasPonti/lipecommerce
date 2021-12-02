import React from 'react'
import './ItemDetail.css'

const ItemDetail = (item) => {

    return (
        <div className="cardDetalle">
            <h2>{item.nombre}</h2>
                <div>
                    <img src={item.imagen} alt={item.id} classname="prodImagen"/>
                </div>     
                <div>
                    <p className="datos">{item.descripcion}</p>
                    <p className="datos">Duracion:{item.horas} horas</p>
                    <p className="datos">Fecha de inicio:{item.inicio}</p>
                    <p className="datos">Fecha de fin :{item.fin}</p>
                    <p className="datos">Tutor:{item.tutor}</p>
                    <p className="datos">Precio:{item.precio}</p>
                    <button>Inscribirse</button>
                </div>      
        </div>
    )
}

export default ItemDetail;
