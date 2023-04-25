export const CART = 'cart'

// if you can, to better work on the application,
// put the product objects here. that way, on the page’s loading, they always start with that

const initial = []

!localStorage.getItem(CART) &&
  localStorage.setItem(CART, JSON.stringify(initial))

export function getItemsLocalStorage(name) {
  const result = JSON.parse(localStorage.getItem(name))
  return result // returns complete item stored with this name
}

export function addItemLocalStorage(name, product) {
  const temp = getItemsLocalStorage(name)
  const found = temp.find((item) => item.id === product.id)
  if (found) {
    updateQuantity(name, found, found.quantity + 1)
  } else {
    const newProd = { ...product, quantity: 1 }
    localStorage.setItem(name, JSON.stringify([...temp, newProd]))
  }
}

export function removeItemLocalStorage(name, product) {
  const temp = getItemsLocalStorage(name) || []
  const result = temp.filter((p) => p.id !== product.id)
  localStorage.setItem(name, JSON.stringify(result))
}

export function updateQuantity(name, product, q) {
  const temp = getItemsLocalStorage(name)
  const arr = temp.filter((prod) => prod.id !== product.id)
  const newProduct = { ...product, quantity: q }
  localStorage.setItem(name, JSON.stringify([...arr, newProduct]))
}
