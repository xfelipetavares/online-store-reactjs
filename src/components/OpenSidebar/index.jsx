import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../../redux/actions/api'
import styles from './styles.module.scss'

const OpenSideBar = () => {
  const styleButton = { background: 'none', border: 'none', width: '4rem' }
  const isOpen = useSelector((store) => store.sidebar.isOpen)
  const disp = useDispatch()

  return (
    <button
      style={styleButton}
      type="button"
      onClick={() => disp(toggleSideBar())}
    >
      {!isOpen && (
        <div className={styles.button}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 17H20M4 12H20M4 7H20"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      )}
    </button>
  )
}

export default OpenSideBar
