import {Row, Col, Container} from 'react-bootstrap'
import Rightbar from './innerpages/Rightbar'
import Leftbar from './innerpages/Leftbar'

function Home() {
  return (
    <Container fluid>
      <Row className='mx-5'>
        <Col><Leftbar/></Col>
        <Col><Rightbar/></Col>
      </Row>
    </Container>
  )
}

export default Home;