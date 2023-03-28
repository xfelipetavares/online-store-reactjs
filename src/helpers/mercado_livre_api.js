const baseUrl = 'https://api.mercadolibre.com/'

// test it! https://api.mercadolibre.com/sites/MLB/categories
export async function getCategories() {
  const response = (await fetch(`${baseUrl}sites/MLB/categories`)).json
  return response // return an array
}

// test it! https://api.mercadolibre.com/items/MLB3223071375
export async function getProducts(productId) {
  const response = (await fetch(`${baseUrl}items/${productId}`)).json
  return response // return an object
}

// test it! https://api.mercadolibre.com/pictures/838384-MLA53431280771_012023
export async function getProductsImage(productImageId) {
  const response = (await fetch(`${baseUrl}pictures/${productImageId}`)).json
  return response.variations // return an array
}

// test it! https://api.mercadolibre.com/items/MLB3223071375/description
export async function getDescription(productId) {
  const response = (await fetch(`${baseUrl}items/${productId}/description`))
    .json
  return response.plain_text // return a text
}

// test it! https://api.mercadolibre.com/sites/MLB/search?q=computador
export async function searchProducts(term) {
  const response = (await fetch(`${baseUrl}sites/MLB/search?q=${term}`)).json
  return response.results // return an array
}

// test it! https://api.mercadolibre.com/questions/search?item_id=MLB3223071375
export async function getQuestions(productId) {
  const response = (
    await fetch(`${baseUrl}questions/search?item_id=${productId}`)
  ).json
  return response.questions // return an array
}
