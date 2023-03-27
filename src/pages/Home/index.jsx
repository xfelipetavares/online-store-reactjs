import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counter } from '../../redux/actions'

// import { Container } from './styles';

const Home = () => {
  const count = useSelector((state) => state.cartCounter.itemCounter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <a href="#">coisa</a>
      <button
        onClick={() => {
          dispatch(counter(2))
        }}
      >
        Soma
      </button>
    </>
  )
}

export default Home
