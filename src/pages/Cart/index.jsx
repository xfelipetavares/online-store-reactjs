import React, { useState } from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import ClearAllCartButton from '../../components/ClearAllCartButton'
import NoItems from '../../components/NoItems'
import Toasty from '../../components/Toasty'

const Cart = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  const [isThere, setIsThere] = useState(false)

  const navigate = useNavigate()

  const handleToasty = () => {
    setIsThere(true)
    setTimeout(() => {
      setIsThere(false)
    }, 3000)
  }

  return (
    <div className={styles.cartPage}>
      {isThere && <Toasty text={'Produtos removidos com sucesso!'} />}
      {items.length === 0 ? (
        <NoItems />
      ) : (
        <div className={styles.main}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Carrinho</h2>
            <div className={styles.tableTitles}>
              <div className={styles.clearButton}>
                <ClearAllCartButton
                  handleToasty={() => {
                    handleToasty()
                  }}
                />
              </div>
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
            <button
              className={styles.submitButton}
              type="button"
              onClick={() => navigate('/payment')}
            >
              Avançar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
