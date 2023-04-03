import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getDescription,
  getProductsImage,
} from '../../services/mercado_livre_api'
import styles from './styles.module.scss'
import freeShippingIcon from '../../assets/freeShippingIcon.svg'

const ProductCard = ({
  product: {
    title,
    id,
    price,
    shipping: { free_shipping: freeShipping },
    thumbnail_id: thumb,
  },
}) => {
  const [urlImage, setUrlImage] = useState([])
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const getDesc = async () => {
    setDescription(await dispatch(getDescription(id)))
  }

  const getImg = async () => {
    const id = await getProductsImage(thumb)
    setUrlImage(id)
  }

  useEffect(() => {
    getImg()
    getDesc()
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.boxImage}>
        <img src={urlImage} alt={title} className={styles.image} />
      </div>
      <div className={styles.box}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.box2}>
          {freeShipping && (
            <div className={styles.free_shipping}>
              <p>Frete Grátis</p>
              <img src={freeShippingIcon} alt="" />
            </div>
          )}
          <p className={styles.price}>
            {Number(price).toFixed(2)}
            <p className={styles.coin}>R$</p>
          </p>
        </div>
        <button className={styles.button} type="button">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

export default ProductCard
