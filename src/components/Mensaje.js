import React from 'react'

const Mensaje = ({ord}) => {
    return (
        <div>
            <h2>Id de la compra: {ord.id}</h2>
            <p>Nombre: {ord.buyer.nombre}</p>
            <p>Telefono: {ord.buyer.telefono}</p>
            <p>Email: {ord.buyer.email}</p>
            <h2>Total: $ {ord.total}</h2>
        </div>
    )
}

export default Mensaje
