import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import { searchProducts } from '../../helpers/mercado_livre_api'
import styles from './styles.module.scss'

const Home = () => {
  const dispatch = useDispatch()
  const [title] = useState('Trending')
  const products = useSelector((store) => store.api.search)

  useEffect(() => {
    dispatch(searchProducts())
  }, [dispatch])

  return (
    <main>
      <Title>{title}</Title>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Home
