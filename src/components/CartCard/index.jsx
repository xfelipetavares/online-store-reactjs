import React, { useState } from 'react'
import {
  CART,
  removeItemLocalStorage,
  updateQuantity,
} from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'

import icon from '../../assets/freeShippingIcon.svg'
import styles from './styles.module.scss'

const CartCard = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity)

  return (
    <div>
      <li className={styles.card}>
        <button
          type="button"
          onClick={() => {
            removeItemLocalStorage(CART, item)
            dispatch(totalItems())
          }}
        >
          X
        </button>
        <img className={styles.img} src={item.thumbnail} alt={item.title} />
        <p className={styles.title}>{item.title}</p>
        <button
          className={styles.subBtn}
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
        <p className={styles.quantity}>{quantity}</p>
        <button
          className={styles.addBtn}
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
        <p>
          {item.shipping.free_shipping && (
            <img className={styles.icon} src={icon} alt="" />
          )}
        </p>
        <p>R${Number(item.price) * Number(quantity)}</p>
      </li>
    </div>
  )
}

export default CartCard
