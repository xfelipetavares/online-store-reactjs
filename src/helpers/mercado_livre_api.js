const baseUrl = 'https://api.mercadolibre.com/'

// test it! https://api.mercadolibre.com/sites/MLB/categories
export async function getCategories() {
  const response = await fetch(`${baseUrl}sites/MLB/categories`)
  const data = await response.json()
  return data // return an array
}

// test it! https://api.mercadolibre.com/items/MLB3223071375
export async function getProduct(productId) {
  const response = await fetch(`${baseUrl}items/${productId}`)
  const data = response.json()
  return data // return an object
}

// test it! https://api.mercadolibre.com/pictures/838384-MLA53431280771_012023
export async function getProductsImage(productImageId) {
  const response = await fetch(`${baseUrl}pictures/${productImageId}`)
  const data = response.json()
  return data // return an object
}

// test it! https://api.mercadolibre.com/items/MLB3223071375/description
export async function getDescription(productId) {
  const response = await fetch(`${baseUrl}items/${productId}/description`)
  const data = response.json()
  return data // return a object
}

// test it! https://api.mercadolibre.com/sites/MLB/search?q=computador
export async function searchProducts(term) {
  const response = await fetch(`${baseUrl}sites/MLB/search?q=${term}`)
  const data = response.json()
  return data // return an object
}

// test it! https://api.mercadolibre.com/questions/search?item_id=MLB3223071375
export async function getQuestions(productId) {
  const response = await fetch(
    `${baseUrl}questions/search?item_id=${productId}`,
  )
  const data = response.json()
  return data // return an object
}
