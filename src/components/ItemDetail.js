import React from 'react'
import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';

const ButtonCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)
    const [activo, setActivo] = useState(true) 

    const increment = () => {
        if(count < maxQuantity){
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    
    

    const agregarCarrito = (count) => {
        onConfirm(count);
        setCount(0)
        setActivo(false)

    }

    const finalizar = () => {
        console.log('Carga Finalizada')
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => agregarCarrito(count)} disabled={!activo}>Agregar al Carrito</button>
            <button onClick={()=> finalizar()} disabled={activo}>Finalizar</button>
        </div>
    )
};

const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value < maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
};



const ItemDetail = ({nombre, id, imagen, descripcion, horas, inicio, fin, tutor, precio, stock, inputType = 'input'}) => {
   
    const Count = inputType === 'input' ? InputCount : ButtonCount;

    function agregarCarrito(cantidad) {
        console.log(`Agregar al carrito el item: ${nombre} con cantidad: ${cantidad}`)
    }


    const cant = (cantidad) => {
        console.log(`Agregado al carrito ${cantidad} `);
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
                    <Count onConfirm={agregarCarrito} maxQuantity={stock}/>
                </div>      
        </div>
    )
}

export default ItemDetail;
