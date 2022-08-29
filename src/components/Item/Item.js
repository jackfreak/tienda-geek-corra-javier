import './Item.scss';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';


const Item = ({id, name='', description='', image='', price=0, stock=0}) => {

    
    const addToCart = (qty) => {
        console.log('qty', qty);
    };

    return (
        <Card className="product-item" style={{ width: '18rem' }} data-id={id}>
            <Card.Header className="product-name"><Card.Title>{name}</Card.Title></Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image} className='product-image'/>
                <Card.Text className='product-desc'>{description}</Card.Text>
                <Card.Text className='product-proce'>$ {price}</Card.Text>
                
                <ItemCount 
                    stock={stock} initial={0} 
                    itemData={ {id, name, description } }
                    addToCart={addToCart} />
            </Card.Body>
            <Card.Footer>
                <span>Stock: {stock}</span>
            </Card.Footer>
        </Card>
    );
}


export {
    Item,
}