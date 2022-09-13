/**
 * ItemDetail component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemDetail.scss';

import { ItemCount } from '../ItemCount/ItemCount';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RichTextRenderer } from '../../misc/RichTextRenderer/RichTextRenderer';

/**
 * Initial Quantity
 */
const INITIAL_QTY = 1;


const ItemDetail = ({itemData = {}}) => {
    const { id, name, description, image, price, stock } = itemData;

    const [count, setCount] = useState(INITIAL_QTY);
    const [purchaseQty, setPurchaseQty] = useState(0);

    const navigate = useNavigate();


    const addToCart = (quantity) => {
        setPurchaseQty(quantity);
    };

    const endPurchase = () => {
        //console.log('click in endPurchase');
        navigate('/cart');
    };


    return (
        <Card className='item-detail card-smooth-shadow' data-item-id={id}>
            <Card.Body>
                <div className="item-detail__top">
                    <div className="item-detail__image">
                        <img src={image} alt={name} />
                    </div>

                    <div className="item-detail__data">
                        <h2 className='item-detail__name'>{name}</h2>
                        <h3 className='item-detail__price'>$ { formatStringIntegerLocale(price) }</h3>

                        <p className='item-detail__stock'>{stock} { (stock > 1) ? 'disponibles' : 'disponible' }</p>

                        {
                            (purchaseQty > 0)
                            ?
                            <Button variant="dark"
                                className="item-detail__btn-end-purchase"
                                onClick={ endPurchase }>
                                Terminar compra
                            </Button>
                            :
                            <ItemCount
                            stock={stock} initial={INITIAL_QTY}
                            count={count}
                            setCount={setCount}
                            onAddToCart={addToCart} />
                        }
                    </div>
                </div>

                <div className="item-detail__bottom">
                    <div className="item-detail__description">
                        <RichTextRenderer content={ description } />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};


export {
    ItemDetail
}
