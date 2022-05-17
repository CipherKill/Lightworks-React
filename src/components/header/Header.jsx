import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Headerstyle.css'

function Header() {
  return (
      <Navbar bg='dark' variant='dark'>
        <Container fluid className='mx-5'>
          <Navbar.Brand href='/' className='brand-format'>Lightworks</Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link><Link to='/bulbs' className='linkformat'>Bulbs</Link></Nav.Link>
            <Nav.Link><Link to='/contact' className='linkformat'>Contact</Link></Nav.Link>
            <Nav.Link><Link to='/aboutus' className='linkformat'>About Us</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;