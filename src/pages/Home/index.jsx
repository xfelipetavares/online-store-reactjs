import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import { getCategories, getProduct } from '../../helpers/mercado_livre_api'

// import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProduct('MLB3223071375'))
  })

  return <Header />
}

export default Home
