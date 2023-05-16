import React from 'react'
import { removeAllItemsFromCart } from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'

import clearCart from '../../assets/clearCart.svg'

const ClearAllCartButton = ({ handleToasty }) => {
  const disp = useDispatch()
  return (
    <button
      title="Remover todos os produtos"
      type="button"
      onClick={() => {
        removeAllItemsFromCart()
        disp(totalItems())
        handleToasty()
      }}
    >
      <img src={clearCart} alt="Apagar todos os itens" />
    </button>
  )
}

export default ClearAllCartButton
