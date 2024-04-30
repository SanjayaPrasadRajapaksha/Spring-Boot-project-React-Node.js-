
import './App.css';
import Users from './Users.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Products from './Products.js';




function App() {
return(
  <BrowserRouter>
    <Routes>
      <Route path='/users' element={<Users/>} />
      <Route path='/products' element={<Products/>}/>


      <Route path='/' element={<Home/>} />
    </Routes>
  </BrowserRouter>
)
}

export default App;
