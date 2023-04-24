import { CART, getItemsLocalStorage } from '../../services/local_storage'
import { TOTAL_ITEMS } from '../actions/cart'

const INITIAL_STATE = {
  total: getItemsLocalStorage(CART).length,
  productsFromLocalStorage: getItemsLocalStorage(CART),
}

export const cart = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOTAL_ITEMS:
      console.log('oi')
      return { ...state, total: getItemsLocalStorage(CART).length }
    default:
      return state
  }
}
