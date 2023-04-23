import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  getCategoryProducts,
} from '../../services/mercado_livre_api'
import { saveTerm } from '../../redux/actions/api'

import styles from './styles.module.scss'

const Sidebar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categories = useSelector((state) => state.api.categories)

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.h3}>Categories</h3>
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
  )
}

export default Sidebar
