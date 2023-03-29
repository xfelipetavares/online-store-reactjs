export const SAVE_CATEGORIES = 'SAVE_CATEGORIES'
export const SAVE_PRODUCT = 'SAVE_PRODUCT'

export const saveCategories = (payload) => ({
  type: SAVE_CATEGORIES,
  payload,
})

export const saveProduct = (payload) => ({
  type: SAVE_PRODUCT,
  payload,
})
