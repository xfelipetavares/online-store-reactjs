import React from 'react'
import styles from './styles.module.scss'
import { CART, addItemLocalStorage } from '../../services/local_storage'
import { useDispatch } from 'react-redux'
import { totalItems } from '../../redux/actions/cart'

const ButtonAdd2Cart = ({ p }) => {
  const dispatch = useDispatch()
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        addItemLocalStorage(CART, p)
        dispatch(totalItems())
      }}
    >
      Adicionar ao carrinho
      <hr />
      <svg
        className={styles.svg}
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.992 4.61315L15.321 8.12055C15.2383 8.508 14.8995 8.74358 14.5088 8.748H4.72667L4.53245 9.74552H13.8555C14.3464 9.77951 14.6794 10.0964 14.6854 10.5017C14.6497 10.9481 14.3019 11.2523 13.8555 11.2579H3.54364C2.98595 11.2122 2.6534 10.8071 2.71375 10.3569L3.15517 8.16878L2.4842 2.02278L0.577225 1.47579C0.111212 1.3072 -0.0789881 0.923067 0.0298519 0.526544C0.210825 0.113291 0.644466 -0.0755183 1.07163 0.0277857L3.50832 0.735703C3.83659 0.847828 4.02543 1.09267 4.07335 1.37927L4.2146 2.60203L15.268 3.72825C15.7759 3.82849 16.0516 4.19505 15.992 4.61315ZM6.07029 12.8456C6.07029 13.4832 5.50309 14 4.80339 14C4.10369 14 3.53649 13.4832 3.53649 12.8456C3.53649 12.2081 4.10371 11.6912 4.80339 11.6912C5.50308 11.6912 6.07029 12.2081 6.07029 12.8456ZM13.6337 12.8456C13.6337 13.4832 13.0664 14 12.3667 14C11.667 14 11.0998 13.4832 11.0998 12.8456C11.0998 12.2081 11.667 11.6912 12.3667 11.6912C13.0664 11.6912 13.6337 12.2081 13.6337 12.8456Z"
          fill="#F2F3F4"
        />
      </svg>
    </button>
  )
}

export default ButtonAdd2Cart
