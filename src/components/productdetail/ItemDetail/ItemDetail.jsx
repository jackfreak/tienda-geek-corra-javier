/**
 * ItemDetail component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemDetail.scss';

import { ItemCount } from '../ItemCount/ItemCount';
import { formatStringIntegerLocale } from '../../../utils/helpers/stringHelpers';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RichTextRenderer } from '../../misc/RichTextRenderer/RichTextRenderer';
import { useCartContext } from '../../../contexts/CartContext';
import { AppRoute } from '../../../utils/constants/AppRoute';


const INITIAL_QTY = 1;

const ItemDetail = ({ itemData = {} }) => {
    const { id, name, description, image, price, stock } = itemData;

    const { addToCart, isInCart } = useCartContext();
    const [count, setCount] = useState(INITIAL_QTY);


    const navigate = useNavigate();

    const onAddToCart = (quantity) => {
        const newCartItem = {
            id,
            name,
            image,
            price,
            stock,
            quantity,
        };

        addToCart(newCartItem);
    };

    const endPurchase = () => {
        navigate(AppRoute.Cart);
    };

    return (
        <Card className='item-detail card-smooth-shadow' data-item-id={id}>
            <Card.Body>
                <div className='item-detail__top'>
                    <div className='item-detail__image'>
                        <img src={image} alt={name} />
                    </div>

                    <div className='item-detail__data'>
                        <h2 className='item-detail__name'>{name}</h2>
                        <h3 className='item-detail__price'>$ {formatStringIntegerLocale(price)}</h3>

                        <p className='item-detail__stock'>
                            {stock} {stock > 1 ? 'disponibles' : 'disponible'}
                        </p>

                        {isInCart(id) && <p>El item ya esta agregado.</p>}

                        {isInCart(id) ? (
                            <Button variant='dark' className='item-detail__btn-buy' onClick={endPurchase}>
                                Ver carrito
                            </Button>
                        ) : (
                            <ItemCount stock={stock} count={count} setCount={setCount} onAddToCart={onAddToCart} />
                        )}
                    </div>
                </div>

                <div className='item-detail__bottom'>
                    <div className='item-detail__description'>
                        <RichTextRenderer content={description} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export { ItemDetail };
