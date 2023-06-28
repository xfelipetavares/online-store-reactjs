import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  getCategoryProducts,
} from '../../services/mercado_livre_api'
import { saveTerm, toggleSideBar } from '../../redux/actions/api'

import styles from './styles.module.scss'
import CloseSideBar from '../CloseSidebar'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categories = useSelector((state) => state.api.categories)

  return (
    <div className={styles.sidebar}>
      <div className={styles.toggleSideBar}>
        <CloseSideBar />
      </div>
      <h3 className={styles.h3}>Categorias</h3>
      <div className={styles.ulCategories}>
        {categories.map(({ id, name }) => (
          <ul key={id}>
            <li
              className={styles.category}
              onClick={() => {
                nav('/')
                dispatch(getCategoryProducts(id))
                dispatch(saveTerm(name))
                dispatch(toggleSideBar())
              }}
            >
              {name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
