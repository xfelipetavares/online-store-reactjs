import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo2 from '../../assets/logo2.svg'
import lupa from '../../assets/lupa.svg'
import cart from '../../assets/cart.svg'
import styles from './styles.module.scss'
import { searchProducts } from '../../services/mercado_livre_api'
import { useDispatch, useSelector } from 'react-redux'
import { saveTerm } from '../../redux/actions/api'
import OpenSideBar from '../OpenSidebar'

const Header = () => {
  const total = useSelector((state) => state.cart.total)
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [term, setTerm] = useState('')
  const nav = useNavigate()

  return (
    <header className={styles.header}>
      {pathname === '/cart' ||
        (pathname === '/payment' ? null : (
          <div className={styles.sidebarToggleButton}>
            <OpenSideBar />
          </div>
        ))}
      <NavLink
        to={'/'}
        onClick={() => {
          nav('/')
          dispatch(searchProducts(term))
          dispatch(saveTerm(''))
        }}
        className={styles.logo}
      >
        <div className={styles.bag}>
          <img src={logo2} alt="" className={styles.img} />
        </div>
        <h1 className={styles.h1}> online store </h1>
      </NavLink>
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
            nav('/')
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
        {total > 0 && <p className={styles.total}>{total}</p>}
      </NavLink>
    </header>
  )
}

export default Header
