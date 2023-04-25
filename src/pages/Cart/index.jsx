import React from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  return (
    <div className={styles.cartPage}>
      <h2>Carrinho</h2>
      <div className={styles.main}>
        <div className={styles.left}>
          <ul>
            {items.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div className={styles.right}>oi</div>
      </div>
    </div>
  )
}

export default Cart
