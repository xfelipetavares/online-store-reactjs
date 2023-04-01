import { combineReducers } from 'redux'
import { api } from './api'
import { cart } from './cart'

export default combineReducers({
  api,
  cart,
})
