/**
 * Item component.
 *
 * @author Javier Alejandro Corra
 */

import './Item.scss';
//import styles from './Item.modules.scss'; // TODO review css modules

import { Card } from 'react-bootstrap';
import { formatStringIntegerLocale } from '../../../utils/helpers/stringHelpers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/AppRoute';

const Item = ({ itemData }) => {
    const { id, name, image, price } = itemData;

    const itemRoute = `${AppRoute.Product}/${id}`;

    return (
        <Card className='item card-smooth-shadow' style={{ width: '18rem' }} data-id={id}>
            <Card.Body>
                <Link to={itemRoute} className=''>
                    <Card.Img className='item__image' variant='top' src={image} />
                </Link>

                <Link to={itemRoute} className=''>
                    <Card.Text as='h3' className='item__title'>
                        {name}
                    </Card.Text>
                </Link>

                <Card.Text className='item__price'>$ {formatStringIntegerLocale(price)}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export { Item };
