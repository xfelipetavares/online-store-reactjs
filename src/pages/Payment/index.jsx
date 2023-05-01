import React from 'react'
import CartCard from '../../components/CartCard'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import boleto from '../../assets/boleto.svg'
import visa from '../../assets/visa.svg'
import mastercard from '../../assets/mastercard.svg'
import elo from '../../assets/elo.svg'
// import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const items = useSelector((store) => store.cart.productsFromLocalStorage)

  // const navigate = useNavigate()

  return (
    <div className={styles.cartPage}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.h2}>Revise seu pedido</h2>
          <div className={styles.tableTitles}>
            <h5>Produto</h5>
            <h5>Preço</h5>
            <h5>Quant.</h5>
            <h5>Frete</h5>
            <h5>Total</h5>
          </div>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {items.map((item) => (
                  <tr key={item.id} className={styles.card}>
                    <CartCard item={item} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.right}>
          <form
            // action="https://formsubmit.co/giovannasousa54@gmail.com"
            // method="POST"
            className={styles.form}
          >
            <h3 className={styles.h3}>Conclua seu pedido</h3>
            <div className={styles.inputs}>
              <input className={styles.input} placeholder="Nome completo" />
              <input className={styles.input} placeholder="Cep" />
              <input className={styles.input} placeholder="Email" />
              <input className={styles.input} placeholder="Telefone" />
              <input className={styles.input} placeholder="CEP" />
              <input className={styles.input} placeholder="Endereço" />
              <input className={styles.input} placeholder="Complemento" />
              <input className={styles.input} placeholder="Número" />
              <input className={styles.input} placeholder="Cidade" />
              <input className={styles.input} placeholder="Estado" />
            </div>
            <div className={styles.payment}>
              <h4>Método de pagamento</h4>
              <div className={styles.method}>
                <div className={styles.divBoleto}>
                  Boleto
                  <label className={styles.boleto}>
                    <input name="method" type="radio" />
                    <img src={boleto} alt="" />
                  </label>
                </div>
                <div>
                  Cartão de crédito
                  <div className={styles.credit}>
                    <label className={styles.type}>
                      <input name="method" type="radio" />
                      <img src={visa} alt="" />
                    </label>
                    <label className={styles.type}>
                      <input name="method" type="radio" />
                      <img src={mastercard} alt="" />
                    </label>
                    <label className={styles.type}>
                      <input name="method" type="radio" />
                      <img src={elo} alt="" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.submit}>
              <button
                className={styles.submitButton}
                type="submit"
                onClick={(e) => e.preventDefault()}
              >
                Confirmar pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment
