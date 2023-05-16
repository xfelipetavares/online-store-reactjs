import React from 'react'

import emptyCart from '../../assets/emptyCart.svg'
import styles from './styles.module.scss'

const NoItems = () => {
  return (
    <div className={styles.noItemsPage}>
      <h2>Seu carrinho ainda está vazio!</h2>
      <img src={emptyCart} alt="" />
    </div>
  )
}

export default NoItems
