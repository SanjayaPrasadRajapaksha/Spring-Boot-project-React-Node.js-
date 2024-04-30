
import './App.css';
import Users from './Users.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Products from './Products.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Orders from './Orders.js';
import EditOrder from './EditOrder.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/orders/:id/editOrder' element={<EditOrder />} />

        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
