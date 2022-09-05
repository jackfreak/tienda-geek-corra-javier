import './Item.scss';
//import styles from './Item.modules.scss';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';


const Item = ({id, name='', description='', image='', price=0, stock=0}) => {

    return (
        <Card className='item card-smooth-shadow' style={{ width: '18rem' }} data-id={id}>
            <Card.Header className="item__header">
                <Card.Title as="h3" className='item__title'>{name}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Img className='item__image' variant="top" src={image} />
                <Card.Text className='item__price'>$ { formatStringIntegerLocale(price) }</Card.Text>

                <Button className='item__more-btn' variant='primary'>Ver más</Button>
            </Card.Body>
        </Card>
    );
}


export {
    Item
}
