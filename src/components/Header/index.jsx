import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo2 from '../../assets/logo2.svg'
import lupa from '../../assets/lupa.svg'
import cart from '../../assets/cart.svg'

import styles from './styles.module.scss'
import { searchProducts } from '../../services/mercado_livre_api'
import { useDispatch, useSelector } from 'react-redux'
import { saveTerm } from '../../redux/actions/api'

const Header = () => {
  const [term, setTerm] = useState('')
  const total = useSelector((state) => state.cart.total)

  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.bag}>
          <img src={logo2} alt="" className={styles.img} />
        </div>
        <h1 className={styles.h1}> online store </h1>
      </div>
      <form className={styles.search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          onChange={({ target: { value } }) => {
            setTerm(value)
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            dispatch(searchProducts(term))
            dispatch(saveTerm(`Mostrando resultados para: ${term}`))
          }}
        >
          <img className={styles.lupa} src={lupa} alt="" />
        </button>
      </form>
      <NavLink className={styles.cart} to="/cart">
        <img src={cart} alt="" />
        <p className={styles.total}>{total}</p>
      </NavLink>
    </header>
  )
}

export default Header
