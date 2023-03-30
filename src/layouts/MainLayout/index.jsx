import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SrcRoutes from '../../routes'
import styles from './styles.module.scss'

const MainLayout = () => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.sidebar}>
      <Sidebar />
      <div className={styles.main}>
        <SrcRoutes />
      </div>
    </div>
  </div>
)

export default MainLayout
