import React, { useState } from 'react'
import { CART, updateQuantity } from '../../services/local_storage'
// import { CART, getItemsLocalStorage } from '../../services/local_storage'

const CartCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity)

  return (
    <div>
      <button>X</button>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <button
        type="button"
        onClick={() => {
          if (quantity <= item.available_quantity && quantity > 1) {
            setQuantity(quantity - 1)
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
