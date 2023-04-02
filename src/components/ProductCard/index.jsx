import React, { useEffect, useState } from 'react'
import { getProductsImage } from '../../services/mercado_livre_api'
import styles from './styles.module.scss'

const ProductCard = ({
  product: {
    title,
    price,
    shipping: { free_shipping: freeShipping },
    thumbnail_id: thumb,
  },
}) => {
  const [urlImage, setUrlImage] = useState([])

  const getImg = async () => {
    const id = await getProductsImage(thumb)
    setUrlImage(id)
  }

  useEffect(() => {
    getImg()
  }, [])

  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.boxImg}>
        {freeShipping && <p className={styles.free_shipping}>Frete Grátis</p>}
        <img src={urlImage} alt={title} className={styles.image} />
      </div>
      <div className={styles.price}>
        <p>R${Number(price).toFixed(2)}</p>
      </div>
      <button className={styles.button} type="button">
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default ProductCard
