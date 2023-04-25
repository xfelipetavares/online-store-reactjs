import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDescription,
  getProduct,
  getProductsImage,
  getQuestions,
} from '../../services/mercado_livre_api'
import ButtonAdd2Cart from '../../components/ButtonAdd2Cart'

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
  const p = useSelector((store) => store.api.product.info)
  const [img, setImg] = useState('')

  useEffect(() => {
    dispatch(getProduct(productId))
    dispatch(getProductsImage(thumbId))
    dispatch(getDescription(id))
    dispatch(getQuestions(id))
  }, [id])

  useEffect(() => {
    setImg(images)
  }, [images])

  return (
    <div className={styles.container}>
      <div className={styles.topProductBox}>
        <div className={styles.topProdLeft}>
          <div className={styles.imgList}>
            {pictures?.map(({ url, id }) => (
              <img
                key={id}
                onClick={() => setImg(url)}
                width={100}
                src={url}
                alt={title}
              />
            ))}
          </div>
          <img src={img} className={styles.mainProdImg} alt={title} />
        </div>
        <div className={styles.topProdRight}>
          <div className={styles.aboveTitleInfos}>
            <p className={styles.shipping}>
              {shipping?.free_shipping === true ? 'frete grátis' : ''}
            </p>
            <p className={styles.condition}>
              Produto {condition === 'new' ? 'novo' : 'usado'}
            </p>
            <p className={styles.quantity}>{soldQuantity} vendidos</p>
          </div>
          <h2 className={styles.title}>{title}</h2>
          {originalPrice && (
            <p className={styles.originalPrice}>
              De: <s>R$ {originalPrice?.toFixed(2)}</s>
            </p>
          )}
          <h3 className={styles.price}>R$ {price?.toFixed(2)}</h3>
          <p className={styles.installments}>
            em até 12x R${(price / 12)?.toFixed(2)}
          </p>
          <ButtonAdd2Cart p={p} />
        </div>
      </div>
    </div>
  )
}

export default Product
