import React from 'react'
import './Cart.css'
import {useContext} from 'react';
import {CartContext} from './cartContext'
import {db} from './firebase'
import {addDoc, collection, doc, updateDoc ,getDoc, writeBatch,Timestamp, DocumentSnapshot} from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const {cart, getCart} = useContext(CartContext);
    const {limpiarCarrito} = useContext(CartContext);
    const {eliminarElemento} = useContext(CartContext);
    const [processingOrder, setProcessingOrder] = useState(false)
    
    const [form, getForm] = useState({
        nombre:'',
        apellido:'',
        telefono: '',
        email: ''
    })

    let navigate = useNavigate();

   

    const llenarFormulario = (e) => {
        const {name, value} = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };

    const confirmOrder = () => {
        console.log('procesando orden')
        setProcessingOrder(true)
        
        const objOrder = {
            buyer: { nombre: form.nombre+' '+form.apellido, telefono: form.telefono, email: form.email},
            items: cart,
            total: precioFinal,
            date: Timestamp.fromDate(new Date())
        }

        console.log('Aca llego 1')
        const batch = writeBatch(db)
        const outOfStock = []

        let idFinal;

        console.log('creacion de orders')

        objOrder.items.forEach((prod) => {
            getDoc(doc(db, 'productos', prod.item.id)).then((documentSnapshot)=> {
                if(documentSnapshot.data().stock >= prod.cantidad){
                    batch.update(doc(db, 'productos', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.cantidad
                    })
                } else {
                    outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                    console.log('A ver si aca llego')
                }
            })
        })

        console.log('Aca llego 2')

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                
                batch.commit().then(()=> {
                    console.log('El Id de su orden es:' , id)

                })  
            }).catch((error)=> {
               console.log('error', `Error de Ejecucion ${error}`) 
            }).finally(()=> {
                setProcessingOrder(false)
                limpiarCarrito()
                navigate('/Dashboard')
            })
        }

        console.log('Aca llego 3')
        
    }

    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }



    if(cart.length === 0 ) {
        return (
            <div className='carroVacio'>
                <h1>Carrito</h1>
                <h2>No hay productos en el carrito</h2><br/>
                <div className='contenedorInicio'><Link className='inicio' to='/'>Inicio</Link></div>
                
            </div>
        )
    }

    let precioFinal = 0;

    return (
        <div className='tabla'>
            <table>
                <tr className='titulos'>
                    <th className='col'>Nombre</th>
                    <th className='col'>Precio</th>
                    <th className='col'>Cantidad</th>
                    <th className='col'>Subtotal</th>
                    <th className='col'>Eliminar</th>
                </tr>    
                <tbody>
                    {cart.map(producto => {
                         precioFinal = precioFinal + (producto.item.precio * producto.cantidad)
                        return <tr className='produc'>
                            <td className='col2'>{producto.item.nombre}</td>
                            <td className='col2'>$ {producto.item.precio}</td>
                            <td className='col2'>{producto.cantidad}</td>
                            <td className='col2'>$ {producto.item.precio * producto.cantidad}</td>
                            <button onClick={ () => eliminarElemento(producto, producto.item.id)}>X</button>
                        </tr>   
                    })}
                </tbody>   
            </table> 
            <h4>Total: $ {precioFinal}</h4>
            <button className='botonconfirm' onClick={limpiarCarrito}>Limpiar Carrito</button>          
            <div className='formulario'>
            
               <div>
               <h3>Confirmar Compra</h3>
                 <form >
                     <input onChange={llenarFormulario} type='text' name='nombre' placeholder='Nombre'/> <br/> 
                     <input onChange={llenarFormulario} type='text' name='apellido' placeholder='Apellido'/><br/> 
                     <input onChange={llenarFormulario} type='text' name='telefono' placeholder='Telefono'/> <br/>
                     <input onChange={llenarFormulario} type='email' name='email' placeholder='E-mail'/> <br/>
                     <button className= 'botonconfirm' onClick={()=>confirmOrder()} >Confirmar Compra</button>
                 </form>
                 </div>
            </div>
        </div>
    )
}

export default Cart;