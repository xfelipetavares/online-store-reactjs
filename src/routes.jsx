import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
// import { Container } from './styles';

const SrcRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search/:term" element={<Search />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/item/:productId" element={<Product />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default SrcRoutes
