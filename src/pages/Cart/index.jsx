import React, { useEffect, useState } from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

// import { Container } from './styles';

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)
  const [products, setProducts] = useState(items)

  useEffect(() => {
    console.log('oi')
    setProducts(items)
  }, [items])

  return (
    <div>
      {products.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Cart
