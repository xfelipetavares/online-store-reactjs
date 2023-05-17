import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SrcRoutes from '../../routes'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import NotFound from '../../pages/NotFound'

const MainLayout = () => {
  const isOpen = useSelector((store) => store.sidebar.isOpen)
  const { pathname } = useLocation()

  return (
    <div className={styles.layout}>
      {pathname === '/notfound' ? (
        <NotFound />
      ) : (
        <>
          <Header />
          <div className={styles.main}>
            {isOpen && (
              <div className={styles.sidebar}>
                <Sidebar />
              </div>
            )}
            <div className={styles.routes}>
              <SrcRoutes />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MainLayout
