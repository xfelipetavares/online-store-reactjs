import React, { useState } from 'react'
import {
  CART,
  removeItemLocalStorage,
  updateQuantity,
} from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'
import styles from './styles.module.scss'

const CartCard = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity)

  return (
    <div className={styles.card}>
      <button
        type="button"
        onClick={() => {
          removeItemLocalStorage(CART, item)
          dispatch(totalItems())
        }}
      >
        X
      </button>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <button
        type="button"
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1)
            updateQuantity(CART, item, quantity - 1)
          }
        }}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        type="button"
        onClick={() => {
          if (item.quantity < item.available_quantity) {
            setQuantity(quantity + 1)
            updateQuantity(CART, item, quantity + 1)
          }
        }}
      >
        +
      </button>
      <p>{item.shipping.free_shipping}</p>
      <p>R${Number(item.price) * Number(quantity)}</p>
    </div>
  )
}

export default CartCard
