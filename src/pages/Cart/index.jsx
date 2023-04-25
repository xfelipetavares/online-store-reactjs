import React from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  return (
    <div className={styles.cartPage}>
      {items.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Cart
