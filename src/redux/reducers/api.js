import {
  SAVE_CATEGORIES,
  SAVE_DESCRIPTION,
  SAVE_PRODUCT,
  SAVE_PRODUCT_IMGS,
  SAVE_QUESTIONS,
  SAVE_SEARCH_PRODUCTS,
  SAVE_TERM,
} from '../actions/api'

const INITIAL_STATE = {
  categories: [],
  term: '',
  search: [],
  product: {
    info: {},
    description: {},
    images: {},
    questions: [],
  },
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
      return { ...state, search: payload }
    case SAVE_QUESTIONS:
      return { ...state, product: { ...state.product, questions: payload } }
    case SAVE_TERM:
      return { ...state, term: payload }
    default:
      return state
  }
}
