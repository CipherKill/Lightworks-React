import {Container} from 'react-bootstrap'

function Footer() {

  const getYear=()=>{
    return new Date().getFullYear();
  };

  return (
    <Container fluid className='bg-dark d-flex justify-content-center pt-2'>
      <p className='text-light'>Lightworks | All rights reserved {getYear()} &#174;</p>
    </Container>
  )
}

export default Footer