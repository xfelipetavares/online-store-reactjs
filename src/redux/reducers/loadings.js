import { PRODUCTS_LOADING } from '../actions/loadings'

const INITIAL_STATE = {
  searchLoading: false,
}

export const loadings = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return { ...state, searchLoading: payload }
    default:
      return state
  }
}
