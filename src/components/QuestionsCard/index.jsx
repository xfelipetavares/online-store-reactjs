import React from 'react'
import styles from './styles.module.scss'

const QuestionsCard = ({ q }) => {
  return (
    <>
      <h4 className={styles.question}>{q?.text}</h4>
      <p className={styles.answer}>{q?.answer?.text}</p>
      <p>
        <i>{q.status === 'UNANSWERED' && 'Não respondida ainda.'}</i>
      </p>
    </>
  )
}

export default QuestionsCard
