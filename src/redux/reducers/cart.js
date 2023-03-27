import { COUNT } from '../actions'

const INITIAL_STATE = {
  itemCounter: 0,
}

export const cartCounter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNT:
      return { itemCounter: state.itemCounter + action.count }
    default:
      return state
  }
}
