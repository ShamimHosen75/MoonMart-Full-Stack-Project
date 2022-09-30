import { Navigate, Route, Routes } from 'react-router-dom';

import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ProductDetails from '../Pages/ProductDetails';
import Shop from '../Pages/Shop';
import SignUP from '../Pages/SignUP';


const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='home' />}></Route>
    <Route path='home' element={<Home />}></Route>
    <Route path='shop' element={<Shop />}></Route>
    <Route path='shop/:id' element={<ProductDetails />}></Route>
    <Route path='cart' element={<Cart />}></Route>
    <Route path='Checkout' element={<Checkout />}></Route>
    <Route path='login' element={<Login />}></Route>
    <Route path='signup' element={<SignUP />}></Route>
  </Routes>
  );
};
export default Routers;