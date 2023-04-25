import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDescription,
  getProduct,
  getProductsImage,
  getQuestions,
} from '../../services/mercado_livre_api'

const Product = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const {
    info: {
      id,
      price,
      title,
      sold_quantity: soldQuantity,
      warranty,
      pictures,
      attributes,
      condition,
      original_price: originalPrice,
      shipping,
      thumbnail_id: thumbId,
    },
    description,
    images,
    questions,
  } = useSelector((store) => store.api.product)

  useEffect(() => {
    dispatch(getProduct(productId))
    dispatch(getProductsImage(thumbId))
    dispatch(getDescription(id))
    dispatch(getQuestions(id))
  }, [id])

  return (
    <div className={styles.container}>
      <div className={styles.topProductBox}>
        <div className={styles.itemImages}>
          <ul>
            {pictures.map(({ url, id }) => (
              <img key={id} width={100} src={url} alt={title} />
            ))}
          </ul>
          <img src={images} style={{ maxWidth: '200px' }} alt={title} />
        </div>
        <div className={styles.itemTitle}>
          <p>Produto {condition === 'new' ? 'novo' : 'usado'}</p>
          <p>{soldQuantity} vendidos</p>
          <p>{shipping?.free_shipping === true ? 'frete gratis' : ''}</p>
          <p>{title}</p>
          {originalPrice && (
            <p>
              De: <s>R${originalPrice?.toFixed(2)}</s>
            </p>
          )}

          <p>R${price?.toFixed(2)}</p>
          <p>em até 12x R${(price / 12)?.toFixed(2)}</p>
          <button type="button">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}

export default Product
