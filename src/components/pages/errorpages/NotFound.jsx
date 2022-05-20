import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <Container className='nfcard'>
      <h1 className='text-light text-center display-2'>Oops! Page not found!</h1>
      <h4 className='text-light text-center pt-4'>Click <Link to='/'>here</Link> to go back</h4>
    </Container>
  )
}

export default NotFound