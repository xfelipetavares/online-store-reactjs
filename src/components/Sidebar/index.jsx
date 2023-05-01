import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  getCategoryProducts,
} from '../../services/mercado_livre_api'
import { saveTerm } from '../../redux/actions/api'

import styles from './styles.module.scss'
import CloseSideBar from '../CloseSidebar'

const Sidebar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categories = useSelector((state) => state.api.categories)

  return (
    <div className={styles.sidebar}>
      <div className={styles.toggleSideBar}>
        <CloseSideBar />
      </div>
      <h3 className={styles.h3}>Categories</h3>
      <div className={styles.ulCategories}>
        {categories.map(({ id, name }) => (
          <ul key={id}>
            <li
              className={styles.category}
              onClick={() => {
                dispatch(getCategoryProducts(id))
                dispatch(saveTerm(name))
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
