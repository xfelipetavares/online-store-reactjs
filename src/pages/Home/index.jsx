import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories, getProduct } from '../../helpers/mercado_livre_api'

// import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProduct('MLB3223071375'))
  })

  return <h1>oi</h1>
}

export default Home
