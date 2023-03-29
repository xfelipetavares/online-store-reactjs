import { SAVE_CATEGORIES, SAVE_PRODUCT } from '../actions/api'

const INITIAL_STATE = {
  categories: [],
  product: {
    info: {},
    description: {},
    images: {},
  },
}

export const api = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SAVE_CATEGORIES:
      return { ...state, categories: payload }
    case SAVE_PRODUCT:
      return { ...state, product: { ...state.product, info: payload } }
    default:
      return state
  }
}
