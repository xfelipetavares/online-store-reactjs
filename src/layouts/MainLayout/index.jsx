import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SrcRoutes from '../../routes'
import styles from './styles.module.scss'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainLayout = () => {
  const isOpen = useSelector((store) => store.sidebar.isOpen)
  const location = useLocation()
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        {!location?.pathname.includes('cart') && isOpen && (
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
