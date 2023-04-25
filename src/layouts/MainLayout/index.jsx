import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SrcRoutes from '../../routes'
import styles from './styles.module.scss'
import { useLocation } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation()
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        {!location?.pathname.includes('cart') && (
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        )}
        <div className={styles.routes}>
          <SrcRoutes />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
