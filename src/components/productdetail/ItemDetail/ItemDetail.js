/**
 * ItemDetail component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemDetail.scss';

import { ItemCount } from '../ItemCount/ItemCount';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';
import { Card } from 'react-bootstrap';


const ItemDetail = ({itemData = {}}) => {

    const {id, name, description, image, price, stock} = itemData;


    const addToCart = (qty) => {
        console.log('qty', qty);
    };


    return (
        <Card className='item-detail card-smooth-shadow'>
            <Card.Body>
                <div className="item-detail__top">
                    <div className="item-detail__image">
                        <img src={image} alt={name} />
                    </div>

                    <div className="item-detail__data">
                        <h2 className='item-detail__name'>{name}</h2>
                        <h3 className='item-detail__price'>$ { formatStringIntegerLocale(price) }</h3>

                        <p className='item-detail__stock'>{stock} { (stock > 1) ? 'disponibles' : 'disponible' }</p>

                        <ItemCount
                        stock={stock} initial={1}
                        itemData={ {id, name, description } }
                        addToCart={addToCart} />

                    </div>
                </div>

                <div className="item-detail__bottom">
                    <div className="item-detail__description">
                        {description}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};


export {
    ItemDetail
}
