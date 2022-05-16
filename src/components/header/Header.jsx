import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Headerstyle.css'

function Header() {
  return (
      <Navbar bg='dark' variant='dark'>
        <Container fluid className='mx-5'>
          <Navbar.Brand href='/home' className='brand'>Lightworks</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link><Link to='/' className='linkformat'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/bulbs' className='linkformat'>Bulbs</Link></Nav.Link>
            <Nav.Link><Link to='/aboutus' className='linkformat'>About Us</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;