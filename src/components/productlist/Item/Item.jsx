/**
 * Item component.
 *
 * @author Javier Alejandro Corra
 */

import './Item.scss';
//import styles from './Item.modules.scss'; // TODO review css modules

import { Card } from 'react-bootstrap';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';
import { Link } from 'react-router-dom';

const Item = ({ itemData }) => {
    const { id, name, image, price } = itemData;

    return (
        <Card className='item card-smooth-shadow' style={{ width: '18rem' }} data-id={id}>
            <Card.Header className="item__header">
                <Card.Title as="h3" className='item__title'>{name}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Img className='item__image' variant="top" src={image} />
                <Card.Text className='item__price'>$ { formatStringIntegerLocale(price) }</Card.Text>

                <Link to={ `/item/${id}` } className='item__view-more-btn btn btn-primary'>Ver más</Link>
            </Card.Body>
        </Card>
    );
}


export {
    Item
}
