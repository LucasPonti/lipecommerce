import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from './firebase';
import Mensaje from './Mensaje';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const [order, setOrder] = useState([]);

    useEffect(()=> {
        const ref = query(collection(db, 'orders'),orderBy('date'));
        getDocs(ref).then((snapshot) => {
            const order = snapshot.docs.map((doc) => {
                const data = doc.data();
                const {date} = data;
                console.log(date)
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                }).format(fecha);
                return {
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                };
            });
            setOrder(order.filter((ticket) => ticket.buyer.email));
        });
    },[]);
    
    return (
        <div className='dashboard'>
            {order.length === 0 ? (
                <h1>Aun no hay ordenes de compra</h1>
            ) : (
                <div>
                <h1>Tickets de compra</h1>
                {order.map((ord) => (
                    <Mensaje key={ord.id} ord={ord}/>
                ))}
                </div>
            )}
            <p className='linkainicio'><Link className='lin' to='/' >Inicio</Link></p>
        </div>
    )
}

export default Dashboard
