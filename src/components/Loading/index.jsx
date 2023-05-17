import React from 'react'
// import loadingImage from '../../assets/loadingImage.svg'
import styles from './styles.module.scss'

const Loading = () => (
  <div className={styles.container}>
    <div className={styles.loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Loading
