import './ProductCard.scss';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const ProductCard = ({id, name='', description='', image=''}) => {
    return (
        <Card className="product-card" style={{ width: '18rem' }} data-id={id}>
            <Card.Header className="product-name">{name}</Card.Header>
            <Card.Body>
                {/*<Card.Title>Card Title</Card.Title> */}
                <Card.Img variant="top" src={image} className='product-image'/>
                <Card.Text>{description}</Card.Text>
                
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}


export {
    ProductCard,
}