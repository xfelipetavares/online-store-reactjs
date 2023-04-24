import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import { searchProducts } from '../../services/mercado_livre_api'
import styles from './styles.module.scss'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.api.search)
  const loading = useSelector((store) => store.loadings.searchLoading)

  useEffect(() => {
    dispatch(searchProducts())
  }, [dispatch])

  return (
    <main>
      <h2>
        <Title />
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} p={product} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
