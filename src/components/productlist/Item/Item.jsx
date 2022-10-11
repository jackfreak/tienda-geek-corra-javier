/**
 * Item component.
 *
 * @author Javier Alejandro Corra
 */

import './Item.scss';
//import styles from './Item.modules.scss'; // TODO review css modules

import { formatStringIntegerLocale } from '../../../utils/helpers/stringHelpers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/AppRoute';

const Item = ({ itemData }) => {
    const { id, name, image, price } = itemData;

    const itemRoute = `${AppRoute.Product}/${id}`;

    // https://getbootstrap.com/docs/5.2/helpers/stretched-link/
    return (
        <div className='item card card-smooth-shadow' data-id={id}>
            <div className='card-body'>
                <img src={image} className='card-img-top item__image' alt={name} />

                <Link to={itemRoute} className='item__title stretched-link'>
                    <h5 className='card-title'>{name}</h5>
                </Link>

                <p className='item__price card-text'>$ {formatStringIntegerLocale(price)}</p>
            </div>
        </div>
    );
};

export { Item };
