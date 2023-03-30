import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Title from '../../components/Title'
import { searchProducts } from '../../helpers/mercado_livre_api'
// import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchProducts())
  })

  return (
    <div>
      <Title>Trending</Title>
      <main>
        <p>card</p>
      </main>
    </div>
  )
}

export default Home
