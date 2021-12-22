import {useState } from "react";
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    
    const [cant, setCant] = useState(1);
    const [out, setOut] = useState(false)

        const incrementar = () => {
            if (cant < stock ) {
                setCant(cant + 1);
            } else {
                setOut(true)
            }
        }

        const decrementar = () => {
            if (cant === 1) {
               return 
            } else {
                setCant(cant - 1);
                setOut(false)
            }
        }


        return (
            <div className="boton">
                <div>
                    <p className="numcont">{cant}</p>
                </div>
                <div>
                    <button onClick={decrementar}>-</button>
                    <button onClick={incrementar}>+</button>
                    {out && <span>No hay Stock</span>}
                    <button onClick={() => onAdd(cant)}>Agregar al Carrito</button>    
                </div>

            </div>
        )
}




export default ItemCount;