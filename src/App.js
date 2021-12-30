import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom' 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartContextProvider from './components/cartContext';


function App() {
  
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
              <Route exact path="/products" element={<ItemListContainer />}/>
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
