import React from 'react'

import styles from './styles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <div className={styles.us}>
        <p>Giovanna</p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/giovannasdj/" target="blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/GiovannaSDJ" target="blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
      <div className={styles.us}>
        <p>Felipe</p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/xfelipetavares/" target="blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/xfelipetavares" target="blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>
    <p className={styles.p}>
      Made with 💜 by Giovanna Sousa and Felipe Tavares
    </p>
  </footer>
)

export default Footer
