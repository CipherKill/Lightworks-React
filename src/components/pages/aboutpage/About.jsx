import {Container,Row,Col} from 'react-bootstrap'
import Sam from '../../../assets/sam.jpg'
import './About.css'

function About() {
  return (
    <Container className='aboutmain d-flex flex-column justify-content-center'>
      <Row>
        <Col md={3}>
          <img src={Sam} alt='picture of Sam' className='ms-5 my-5'/>
        </Col>
        <Col md={9}>
          <h2 className='my-5 pusher'>Sam's Lightbulb shop</h2>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis ipsa soluta qui doloribus placeat, aut provident et exercitationem nemo repudiandae molestiae repellat dicta unde corporis, ex laudantium. Eos, ullam!</p>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quaerat, odio eveniet cumque nobis, rerum repellat ipsa ab recusandae maiores illum asperiores debitis reprehenderit nihil placeat libero! Adipisci, fuga incidunt?</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About