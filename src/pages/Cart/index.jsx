import React from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  return (
    <div className={styles.cartPage}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.h2}>Carrinho</h2>
          <div className={styles.tableTitles}>
            <h5>Produto</h5>
            <h5>Preço</h5>
            <h5>Quant.</h5>
            <h5>Frete</h5>
            <h5>Total</h5>
          </div>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {items.map((item) => (
                  <tr key={item.id} className={styles.card}>
                    <CartCard item={item} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.right}>oi</div>
      </div>
    </div>
  )
}

export default Cart
