import React from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import ClearAllCartButton from '../../components/ClearAllCartButton'

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  const navigate = useNavigate()

  return (
    <div className={styles.cartPage}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.h2}>Carrinho</h2>
          <ClearAllCartButton />
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
        <div className={styles.right}>
          <p>
            Valor total do carrinho: R$
            {items
              .reduce(
                (acc, item) => acc + Number(item.price * item.quantity),
                0,
              )
              .toFixed(2)}
          </p>
          <button type="button" onClick={() => navigate('/payment')}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
