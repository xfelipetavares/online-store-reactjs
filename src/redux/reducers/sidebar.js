import { TOGGLE_SIDE_BAR } from '../actions/api'

const INITIAL_STATE = {
  isOpen: false,
}

export const sidebar = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_SIDE_BAR:
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}
