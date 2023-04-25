import {
  saveProductsImgs,
  saveCategories,
  saveDescription,
  saveProduct,
  // saveQuestions,
  saveSearchProducts,
  saveQuestions,
} from '../redux/actions/api'
import { searchLoading } from '../redux/actions/loadings'
const baseUrl = 'https://api.mercadolibre.com/'

// test it! https://api.mercadolibre.com/sites/MLB/categories
export const getCategories = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}sites/MLB/categories`)
  const data = await response.json()
  dispatch(saveCategories(data))
}

// test it! https://api.mercadolibre.com/items/MLB3223071375
export const getProduct = (productId) => async (dispatch) => {
  const response = await fetch(`${baseUrl}items/${productId}`)
  const data = await response.json()
  dispatch(saveProduct(data))
}

// test it! https://api.mercadolibre.com/pictures/838384-MLA53431280771_012023
export const getProductsImage = (productImageId) => async (dispatch) => {
  const response = await fetch(`${baseUrl}pictures/${productImageId}`)
  const data = await response.json()
  dispatch(saveProductsImgs(data.variations[0]?.url))
  return data.variations[0].url
}

// test it! https://api.mercadolibre.com/items/MLB3223071375/description
export const getDescription = (productId) => async (dispatch) => {
  const response = await fetch(`${baseUrl}items/${productId}/description`)
  const data = await response.json()
  dispatch(saveDescription(data?.plain_text))
  return data?.plain_text
}

// test it! https://api.mercadolibre.com/sites/MLB/search?q=computador
export const searchProducts = (term) => async (dispatch) => {
  dispatch(searchLoading(true))
  const response = await fetch(
    `${baseUrl}sites/MLB/search?q=${term || 'games ps5'}`,
  )
  const data = await response.json()
  await dispatch(saveSearchProducts(data?.results))
  dispatch(searchLoading(false))
}

// test it! https://api.mercadolibre.com/sites/MLA/search?category=MLA5726
export const getCategoryProducts = (categoryId) => async (dispatch) => {
  dispatch(searchLoading(true))
  const response = await fetch(
    `${baseUrl}/sites/MLB/search?category=${categoryId}`,
  )
  const data = await response.json()
  await dispatch(saveSearchProducts(data?.results))
  dispatch(searchLoading(false))
}

// test it! https://api.mercadolibre.com/questions/search?item_id=MLB3223071375
export const getQuestions = (productId) => async (dispatch) => {
  const response = await fetch(
    `${baseUrl}questions/search?item_id=${productId}`,
  )
  const data = await response.json()
  dispatch(saveQuestions(data?.questions))
  return data?.questions
}
