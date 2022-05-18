import {Card,Button} from 'react-bootstrap'

function CardTemplate({image,name,price}) {
  return (
    <>
    <Card className="card">
        <Card.Img className='image' src={image} />
        <Card.Body className="details"> 
            <Card.Title className="name">
                {name}
            </Card.Title>
            <div className="price">
                {price}
            </div>
            <Button className="button">
                Add to cart
            </Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default CardTemplate