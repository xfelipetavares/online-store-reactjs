import {
  SAVE_CATEGORIES,
  SAVE_DESCRIPTION,
  SAVE_PRODUCT,
  SAVE_PRODUCT_IMGS,
  SAVE_QUESTIONS,
  SAVE_SEARCH_PRODUCTS,
} from '../actions/api'

const INITIAL_STATE = {
  categories: [],
  product: {
    info: {},
    description: {},
    images: {},
    questions: [],
  },
  search: [],
}

export const api = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SAVE_CATEGORIES:
      return { ...state, categories: payload }
    case SAVE_PRODUCT:
      return { ...state, product: { ...state.product, info: payload } }
    case SAVE_PRODUCT_IMGS:
      return { ...state, product: { ...state.product, images: payload } }
    case SAVE_DESCRIPTION:
      return { ...state, product: { ...state.product, description: payload } }
    case SAVE_SEARCH_PRODUCTS:
      return { ...state, search: payload.results }
    case SAVE_QUESTIONS:
      return { ...state, product: { ...state.product, questions: payload } }
    default:
      return state
  }
}
