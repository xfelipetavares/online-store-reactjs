import { getItemsLocalStorage } from '../../services/local_storage'
import { TOTAL_ITEMS } from '../actions/cart'

const INITIAL_STATE = {
  total: getItemsLocalStorage('cart').length,
}

export const cart = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOTAL_ITEMS:
      return { ...state, total: getItemsLocalStorage('cart').length }
    default:
      return state
  }
}
