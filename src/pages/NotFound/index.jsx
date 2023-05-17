import React, { useState } from 'react'

import notFound from '../../assets/notFound.svg'
import happy from '../../assets/happy.svg'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  const [mood, setMood] = useState(false)
  const [count, setCount] = useState(4)

  const counter = setInterval(() => {
    setCount(count - 1)
  }, 1000)

  return (
    <div className={styles.notFoundPage}>
      {!mood ? <h1>404</h1> : <h1>Ok...</h1>}
      {!mood ? (
        <h2>Não conseguimos encontrar esta página!</h2>
      ) : (
        <h2>Vou redirecionar você :P !</h2>
      )}
      <img src={!mood ? notFound : happy} alt="gatinho" />

      <button
        onClick={() => {
          setMood(true)
          setTimeout(() => {
            clearInterval()
            navigate('/')
          }, 3000)
          counter()
        }}
      >
        {!mood ? 'Voltar para a página inicial' : `${count}...`}
      </button>
    </div>
  )
}

export default NotFound
