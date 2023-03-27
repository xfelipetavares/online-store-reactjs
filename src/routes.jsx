import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
// import { Container } from './styles';

const SrcRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:product" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/item/:productId" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default SrcRoutes
