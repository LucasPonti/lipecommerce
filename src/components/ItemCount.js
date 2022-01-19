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
            <div className="contenedor">
                <div>
                    <button className="boton" onClick={decrementar}>-</button>
                    <button className="boton" onClick={incrementar}>+</button>
                    <p className="numcont">{cant}</p>
                    <button className="boton" onClick={() => onAdd(cant)}>Agregar al Carrito</button>    
                    {out && <span className="alerta">No hay Stock</span>}
                </div>
            </div>
        )
}




export default ItemCount;