export const REMOVE_ALL_ITEMS_CART = 'REMOVE_ALL_ITEMS_CART'
export const TOTAL_ITEMS = 'TOTAL_ITEMS'

export const totalItems = () => ({
  type: TOTAL_ITEMS,
})

export const removeAllItemsCart = () => ({
  type: REMOVE_ALL_ITEMS_CART,
})
