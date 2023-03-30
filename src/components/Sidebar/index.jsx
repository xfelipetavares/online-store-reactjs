import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../helpers/mercado_livre_api'

import styles from './styles.module.scss'

const Sidebar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  })

  const categories = useSelector((state) => state.api.categories)

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.h3}>Categories</h3>
      {categories.map(({ id, name }) => (
        <ul key={id}>
          <button className={styles.category}>{name}</button>
        </ul>
      ))}
    </div>
  )
}

export default Sidebar
