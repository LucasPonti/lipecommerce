import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom' 
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import {getItem, getProductos} from './components/productos'
import { useState, useEffect } from 'react';
import Cart from './components/Cart'
import CartContext from './components/cartContext';
import CartContextProvider from './components/cartContext';


function App() {
  const[products, setProducts] = useState([])
  useEffect(() => {
    const lista = getProductos()
    lista.then(lista => {
        setProducts(lista)
    })
    return () => {
        setProducts([])
    }
}, [])



  return (
    <CartContextProvider>
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
          <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={'Bienvenidos!'}/>}/>
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route exact path="/products" element={<ItemList products={products}/>}/>
              <Route exact path="/detail/:productId" element={<ItemDetailContainer  />}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route path = "*" element={<h2>Pagina no encontrada</h2>}/>
          </Routes>
    </div> 
    </Router>
    </CartContextProvider>
  );
}

export default App;
