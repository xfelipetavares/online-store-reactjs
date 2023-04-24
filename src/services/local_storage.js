import { useDispatch } from 'react-redux'
import { totalItems } from '../redux/actions/cart'

const dispatch = useDispatch

localStorage.setItem('cart', JSON.stringify([]))

export function getItemsLocalStorage(name) {
  const result = JSON.parse(localStorage.getItem(name))
  return result // returns complete item storaged with this name
}

export function addItemLocalStorage(name, product) {
  const temp = getItemsLocalStorage(name)
  localStorage.setItem(name, [...temp, product])
  dispatch(totalItems())
}

export function removeItemLocalStorage(name, product) {
  const temp = getItemsLocalStorage(name)
  const result = temp.filter((p) => p !== product)
  localStorage.setItem(name, result)
  dispatch(totalItems())
}
