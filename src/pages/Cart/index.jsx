import React from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

// import { Container } from './styles';

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  return (
    <div>
      {items.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Cart
