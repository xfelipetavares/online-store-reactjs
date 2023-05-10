import React, { useState } from 'react'
import {
  CART,
  removeItemLocalStorage,
  updateQuantity,
} from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'

import icon from '../../assets/freeShippingIcon.svg'
import deleteIcon from '../../assets/deleteButton.svg'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

const CartCard = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity)

  return (
    <>
      <td className={styles.product}>
        <div className={styles.productImg}>
          <img className={styles.img} src={item.thumbnail} alt={item.title} />
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => {
              removeItemLocalStorage(CART, item)
              dispatch(totalItems())
            }}
          >
            <img src={deleteIcon} alt="" />
          </button>
        </div>
        <NavLink to={`/item/${item.id}`}>
          <p className={styles.title}>{item.title}</p>
        </NavLink>
      </td>
      <td className={styles.ogPrice}>R${item.price.toFixed(2)}</td>
      <td className={styles.qty}>
        <div className={styles.addSubButtons}>
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
            <img src={minus} alt="" />
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
            <img src={plus} alt="" />
          </button>
        </div>
      </td>
      <td>
        {item.shipping.free_shipping && (
          <img className={styles.icon} src={icon} alt="" />
        )}
      </td>
      <td className={styles.price}>
        R${Number(item.price * quantity).toFixed(2)}
      </td>
    </>
  )
}

export default CartCard
