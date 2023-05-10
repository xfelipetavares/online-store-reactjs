import React from 'react'
import { removeAllItemsFromCart } from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'

// import { Container } from './styles';

const ClearAllCartButton = () => {
  const disp = useDispatch()
  return (
    <button
      type="button"
      onClick={() => {
        removeAllItemsFromCart()
        disp(totalItems())
        alert('Todos os itens do carrinho foram removidos. 🛒')
      }}
    >
      Remover todos produtos do carrinho
    </button>
  )
}

export default ClearAllCartButton
