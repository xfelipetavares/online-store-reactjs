import { TOTAL_ITEMS } from '../actions/cart'

const INITIAL_STATE = {
  total: 0,
}

export const cart = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOTAL_ITEMS:
      return { ...state, total: payload }
    default:
      return state
  }
}
