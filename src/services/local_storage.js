import { useDispatch } from 'react-redux'
import { totalItems } from '../redux/actions/cart'
export const CART = 'cart'

const dispatch = useDispatch

// if you can, to better work on the application,
// put the product objects here. that way, on the page’s loading, they always start with that
const initial = [
  {
    id: 'MLB3223071375',
    site_id: 'MLB',
    title: ' Moto E22 Dual Sim 32 Gb Branco 2 Gb Ram',
    subtitle: null,
    seller_id: 1168726042,
    category_id: 'MLB1055',
    official_store_id: 20,
    price: 726.96,
    base_price: 726.96,
    original_price: 726.96,
    currency_id: 'BRL',
    initial_quantity: 881,
    available_quantity: 100,
    sold_quantity: 500,
    sale_terms: [],
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_pro',
    start_time: '2023-02-22T13:54:00.000Z',
    stop_time: '2043-02-17T04:00:00.000Z',
    condition: 'new',
    permalink:
      'https://produto.mercadolivre.com.br/MLB-3223071375-moto-e22-dual-sim-32-gb-branco-2-gb-ram-_JM',
    thumbnail_id: '838384-MLA53431280771_012023',
    thumbnail: 'http://http2.mlstatic.com/D_838384-MLA53431280771_012023-I.jpg',
    secure_thumbnail:
      'https://http2.mlstatic.com/D_838384-MLA53431280771_012023-I.jpg',
    pictures: [],
    video_id: null,
    descriptions: [],
    accepts_mercadopago: true,
    non_mercado_pago_payment_methods: [],
    shipping: {},
    international_delivery_mode: 'none',
    seller_address: {},
    seller_contact: null,
    location: {},
    coverage_areas: [],
    attributes: [],
    warnings: [],
    listing_source: '',
    variations: [],
    status: 'active',
    sub_status: [],
    tags: [],
    warranty: 'Garantia de fábrica: 12 meses',
    catalog_product_id: 'MLB21281340',
    domain_id: 'MLB-CELLPHONES',
    parent_item_id: null,
    differential_pricing: null,
    deal_ids: [],
    automatic_relist: false,
    date_created: '2023-02-22T13:54:00.000Z',
    last_updated: '2023-04-24T13:14:05.000Z',
    health: null,
    catalog_listing: true,
    channels: [],
    quantity: 1,
  },
  {
    id: 'MLB3223071376',
    site_id: 'MLB',
    title: ' Moto E22 Dual Sim 32 Gb Branco 2 Gb Ram',
    subtitle: null,
    seller_id: 1168726042,
    category_id: 'MLB1055',
    official_store_id: 20,
    price: 726.96,
    base_price: 726.96,
    original_price: 726.96,
    currency_id: 'BRL',
    initial_quantity: 881,
    available_quantity: 100,
    sold_quantity: 500,
    sale_terms: [],
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_pro',
    start_time: '2023-02-22T13:54:00.000Z',
    stop_time: '2043-02-17T04:00:00.000Z',
    condition: 'new',
    permalink:
      'https://produto.mercadolivre.com.br/MLB-3223071375-moto-e22-dual-sim-32-gb-branco-2-gb-ram-_JM',
    thumbnail_id: '838384-MLA53431280771_012023',
    thumbnail: 'http://http2.mlstatic.com/D_838384-MLA53431280771_012023-I.jpg',
    secure_thumbnail:
      'https://http2.mlstatic.com/D_838384-MLA53431280771_012023-I.jpg',
    pictures: [],
    video_id: null,
    descriptions: [],
    accepts_mercadopago: true,
    non_mercado_pago_payment_methods: [],
    shipping: {},
    international_delivery_mode: 'none',
    seller_address: {},
    seller_contact: null,
    location: {},
    coverage_areas: [],
    attributes: [],
    warnings: [],
    listing_source: '',
    variations: [],
    status: 'active',
    sub_status: [],
    tags: [],
    warranty: 'Garantia de fábrica: 12 meses',
    catalog_product_id: 'MLB21281340',
    domain_id: 'MLB-CELLPHONES',
    parent_item_id: null,
    differential_pricing: null,
    deal_ids: [],
    automatic_relist: false,
    date_created: '2023-02-22T13:54:00.000Z',
    last_updated: '2023-04-24T13:14:05.000Z',
    health: null,
    catalog_listing: true,
    channels: [],
    quantity: 1,
  },
]

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
  dispatch(totalItems())
}

export function updateQuantity(name, product, q) {
  const temp = getItemsLocalStorage(name)
  const arr = temp.filter((prod) => prod.id !== product.id)
  const newProduct = { ...product, quantity: q }
  localStorage.setItem(name, JSON.stringify([...arr, newProduct]))
}
