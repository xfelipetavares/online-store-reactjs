export const SAVE_CATEGORIES = 'SAVE_CATEGORIES'
export const SAVE_PRODUCT = 'SAVE_PRODUCT'
export const SAVE_PRODUCT_IMGS = 'SAVE_PRODUCT_IMGS'
export const SAVE_DESCRIPTION = 'SAVE_DESCRIPTION'
export const SAVE_SEARCH_PRODUCTS = 'SAVE_SEARCH_PRODUCTS'
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS'
export const SAVE_TERM = 'SAVE_TERM'

export const saveCategories = (payload) => ({
  type: SAVE_CATEGORIES,
  payload,
})

export const saveProduct = (payload) => ({
  type: SAVE_PRODUCT,
  payload,
})

export const saveProductsImgs = (payload) => ({
  type: SAVE_PRODUCT_IMGS,
  payload,
})

export const saveDescription = (payload) => ({
  type: SAVE_PRODUCT_IMGS,
  payload,
})

export const saveSearchProducts = (payload) => ({
  type: SAVE_SEARCH_PRODUCTS,
  payload,
})

export const saveQuestions = (payload) => ({
  type: SAVE_QUESTIONS,
  payload,
})

export const saveTerm = (payload) => ({
  type: SAVE_TERM,
  payload,
})
