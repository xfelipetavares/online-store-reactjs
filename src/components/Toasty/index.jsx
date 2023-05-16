import React from 'react'

import styles from './styles.module.scss'

const Toasty = ({ text }) => {
  return (
    <div className={styles.toasty}>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Toasty
