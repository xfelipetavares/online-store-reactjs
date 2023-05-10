import React, { useEffect } from 'react'

import styles from './styles.module.scss'
// import SuccessIcon from '../../components/SuccessIcon'
import success from '../../assets/success.gif'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 4000)
  })

  return (
    <div className={styles.successPage}>
      <div className={styles.popUp}>
        <img src={success} alt="success" />
        <h3>Pedido concluído com sucesso!</h3>
      </div>
    </div>
  )
}

export default PaymentSuccess
