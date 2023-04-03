import React from 'react'
import loadingImage from '../../assets/loadingImage.svg'
import styles from './styles.module.scss'

const Loading = () => (
  <div className={styles.loading}>
    <img src={loadingImage} alt="" />
    <p>Loading...</p>
  </div>
)

export default Loading
