import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MyCustomCard({productName , productImg  , price}) {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={productImg} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <p>{price}</p>
      </Card.Body>
    </Card>
  );
}

export default MyCustomCard;