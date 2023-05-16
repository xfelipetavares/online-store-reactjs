import React from 'react'
import { removeAllItemsFromCart } from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'

// import { Container } from './styles';
import clearCart from '../../assets/clearCart.svg'

const ClearAllCartButton = () => {
  const disp = useDispatch()
  return (
    <button
      title="Remover todos os produtos"
      type="button"
      onClick={() => {
        removeAllItemsFromCart()
        disp(totalItems())
        alert('Todos os itens do carrinho foram removidos. 🛒')
      }}
    >
      <img src={clearCart} alt="Apagar todos os itens" />
    </button>
  )
}

export default ClearAllCartButton
