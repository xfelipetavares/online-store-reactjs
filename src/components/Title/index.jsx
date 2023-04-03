import { useSelector } from 'react-redux'

// import { Container } from './styles';

const Title = () => {
  const term = useSelector((store) => store.api.term)
  return `${term || 'Trending'}`
}

export default Title
