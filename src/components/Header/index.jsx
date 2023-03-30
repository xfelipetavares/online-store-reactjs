import React from 'react'

import logo from '../../assets/logo.svg'
import lupa from '../../assets/lupa.svg'
import cart from '../../assets/cart.svg'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.bag}>
          <img src={logo} alt="" className={styles.img} />
        </div>
        <h1 className={styles.h1}> online store </h1>
      </div>
      <div className={styles.search}>
        <input className={styles.input} type="text" placeholder="Search" />
        <img className={styles.lupa} src={lupa} alt="" />
      </div>
      <img src={cart} alt="" className={styles.cart} />
    </header>
  )
}

export default Header
