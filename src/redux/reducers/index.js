import { combineReducers } from 'redux'
import { api } from './api'
import { cart } from './cart'
import { loadings } from './loadings'

export default combineReducers({
  api,
  cart,
  loadings,
})
