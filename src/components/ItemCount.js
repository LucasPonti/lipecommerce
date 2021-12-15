import {useState } from "react";
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [cant, setCant] = useState(initial);

        const incrementar = () => {
            if (cant < stock ) {
                setCant(cant + 1);
            }
        }

        const decrementar = () => {
            if (cant > 0) {
                setCant(cant - 1);
            }
        }

        const reset = () => {
            setCant(initial);
        }



        return (
            <div className="boton">
                <div>
                    <p className="numcont">{cant}</p>
                </div>
                <div>
                    <button onClick={decrementar}>-</button>
                    <button onClick={onAdd}>Agregar al Carrito</button>
                    <button onClick={incrementar}>+</button></div>
            </div>
        )
}




export default ItemCount;