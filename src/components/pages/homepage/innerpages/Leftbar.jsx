import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './styles/Leftbar.css'
import {useContext} from 'react'
import MasterContext from '../../../../context/MasterContext'

function Leftbar(){

  const {switchBulb}=useContext(MasterContext);


  return (
    <Container fluid className='offset-margin'>
      <h1 className='heading'>Welcome to Lightworks</h1>
      <p className='description'><span className='format-quote'>&quot;To invent, you need a good imagination and a pile of junk.&quot; </span>- Thomas Edision</p>
      <button type='button' className='btn'><Link to='/bulbs' className='link-format'>See Bulbs</Link></button>
      <button type='button' onClick={switchBulb} className='btn link-format'>Click to see magic</button>
    </Container>
  );
}

export default Leftbar