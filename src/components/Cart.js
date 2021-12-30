import React from 'react'
import './Cart.css'
import {useContext} from 'react';
import {CartContext} from './cartContext'
import {db} from './firebase'
import {addDoc, collection, doc, documentSnapshot, getDoc, getFirestore, writeBatch} from 'firebase/firestore'
import { useState } from 'react/cjs/react.development';
import {updateDoc, Timestamp} from 'firebase/firestore'
import { Link } from 'react-router-dom';


const Cart = () => {
    
    const {cart, getCart} = useContext(CartContext);
    const {limpiarCarrito} = useContext(CartContext);
    const {eliminarElemento} = useContext(CartContext)
    let totalProd = 0;
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name:'',
        phone: '',
        address: ''
    })

    const getTotal =  () => {
        
        cart.map(producto => {
            totalProd = totalProd + producto.precio
        }) 
        return (totalProd)
    }

    const llenarFormulario = (e) => {
        const {dato, valor} = e.target;
        setContact({
            ...contact,
            [dato]: valor
        })
    }

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: { name: 'Lucas',  phone: '2324687537',email: 'email@email.com'},
            items: cart,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }

       
        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod) => {
            getDoc(doc(db,'productos',prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.cantidad) {
                    batch.update(doc(db,'productos', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.cantidad
                    })
                } else {
                    outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(()=> {
                    console.log('El id de orden es: ',id)
                }) 
            }).catch((error) => {
                console.log('error','Error en la orden')
            }).finally(()=> {
                setProcessingOrder(false)
                limpiarCarrito()
            })
        }
    }



    if(cart.length === 0) {
        return (
            <div>
                <h1>Carrito</h1>
                <h2>No hay productos en el carrito</h2>
            </div>
        )
    }

    return (
        <div className='tabla'>
            <table>
                <tr>
                    <th className='col'>Nombre</th>
                    <th className='col'>Precio</th>
                    <th className='col'>Cantidad</th>
                    <th className='col'>Eliminar</th>
                </tr>    
                <tbody>
                    {cart.map(producto => {
                        return <tr>
                            <td>{producto.item.nombre}</td>
                            <td>{producto.item.precio}</td>
                            <td>{producto.cantidad}</td>
                            <button onClick={ () => eliminarElemento(producto, producto.item.id)}>X</button>
                        </tr>   
                    })}
                </tbody>   
            </table> 
            <button onClick={limpiarCarrito}>Limpiar Carrito</button>   

            

            <form>
                <label>Nombre: </label>
                <input onChange={llenarFormulario}></input>   
                <label>Apellido: </label>
                <input onChange={llenarFormulario}></input> 
                <label>Telefono: </label>
                <input onChange={llenarFormulario}></input> 
                <label>Email: </label>
                <input onChange={llenarFormulario}></input> 
                <label>Comentario: </label>
                <input onChange={llenarFormulario}></input>  
                <button onClick={() => confirmOrder}>Confirmar Compra</button>
            </form>
        </div>
    )
}

export default Cart