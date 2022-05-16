import {Row, Col, Container} from 'react-bootstrap'
import Rightbar from './innerpages/Rightbar'
import Leftbar from './innerpages/Leftbar'

function Home() {
  return (
    <Container fluid className='mx-5'>
      <Row>
        <Col><Leftbar/></Col>
        <Col><Rightbar/></Col>
      </Row>
    </Container>
  )
}

export default Home;