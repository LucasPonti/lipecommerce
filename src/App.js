import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import {getItem, getProductos} from './components/productos'
import { useState, useEffect } from 'react';


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
          </Routes>
    </div> 
    </Router>
  );
}

export default App;
