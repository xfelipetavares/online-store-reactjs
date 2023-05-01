import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getDescription,
  getProductsImage,
} from '../../services/mercado_livre_api'
import styles from './styles.module.scss'
import freeShippingIcon from '../../assets/freeShippingIcon.svg'
import { NavLink } from 'react-router-dom'
import ButtonAdd2Cart from '../ButtonAdd2Cart'

const ProductCard = ({
  product: {
    title,
    id,
    price,
    shipping: { free_shipping: freeShipping },
    thumbnail_id: thumb,
  },
  p,
}) => {
  const [urlImage, setUrlImage] = useState([])
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const justGet = async () => {
    setDescription(await dispatch(getDescription(id)))
    setUrlImage(await dispatch(getProductsImage(thumb)))
  }

  useEffect(() => {
    justGet()
  }, [])

  return (
    <div className={styles.card}>
      <NavLink to={`/item/${id}`} className={styles.boxImage}>
        <img src={urlImage} alt={title} className={styles.image} />
      </NavLink>
      <div className={styles.box}>
        <p className={styles.title}>
          <NavLink to={`/item/${id}`}>{title}</NavLink>
        </p>
        <p className={styles.description}>
          <NavLink to={`/item/${id}`}>{description}</NavLink>
        </p>
        <div className={styles.box2}>
          {freeShipping && (
            <div className={styles.free_shipping}>
              <p>Frete Grátis</p>
              <img src={freeShippingIcon} alt="" />
            </div>
          )}
          <div className={styles.price}>
            {Number(price).toFixed(2)}
            <p className={styles.coin}>R$</p>
          </div>
        </div>
        <ButtonAdd2Cart p={p} />
      </div>
    </div>
  )
}

export default ProductCard
