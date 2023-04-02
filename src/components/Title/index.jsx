import React from 'react'
import { useSelector } from 'react-redux'

// import { Container } from './styles';

const Title = () => {
  const term = useSelector((store) => store.api.term)
  return <h2>{term || 'Trending'}</h2>
}

export default Title
