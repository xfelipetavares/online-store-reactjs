import React, { useEffect, useState } from 'react'
import { getProductsImage } from '../../helpers/mercado_livre_api'
import styles from './styles.module.scss'

const ProductCard = ({ product }) => {
  const [urlImage, setUrlImage] = useState([])

  const getImg = async () => {
    const teste = await getProductsImage(product.thumbnail_id)
    setUrlImage(teste)
  }
  // const dispatch = useDispatch()

  useEffect(() => {
    getImg()
  }, [])

  return (
    <div className={styles.card}>
      <p className={styles.title}>{product.title}</p>
      <div className={styles.boxImg}>
        {product.shipping.free_shipping && (
          <p className={styles.free_shipping}>Frete Grátis</p>
        )}
        <img src={urlImage} alt={product.title} className={styles.image} />
      </div>
      <button className={styles.button} type="button">
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default ProductCard
