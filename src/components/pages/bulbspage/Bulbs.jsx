import {useContext} from 'react'
import MasterContext from '../../../context/MasterContext'
import CardTemplate from './CardTemplate'
import {Col,Row} from 'react-bootstrap'
import "./Bulbs.css"

function Bulbs() {

const {bulbData}=useContext(MasterContext);

return(
  <div className="bulbpage">
    <Row>
    {bulbData.map(bulb=>(
      <Col sm={12} md={3}>
        <CardTemplate key={bulb.id} image={bulb.image} name={bulb.name} price={bulb.price}/>
      </Col>
    ))}
    </Row>
  </div>
);

}

export default Bulbs;
