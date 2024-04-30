
import './App.css';
import Users from './Users.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Products from './Products.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Orders from './Orders.js';
import EditOrder from './EditOrder.js';
import { AuthProvider } from './utils/AuthContext.js';
import Login from './Login.js';
import ProtectedRoutes from './utils/ProtectedRoutes.js';




function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/users' element={<Users />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/orders/:id/editOrder' element={<EditOrder />} />

            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
