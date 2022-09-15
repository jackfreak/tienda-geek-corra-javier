/**
 * CartItem component.
 *
 * @author Javier Alejandro Corra
 */

import './CartItem.scss';
import { Button, Card } from 'react-bootstrap';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';
import { Link } from 'react-router-dom';
import { BsTrashFill } from 'react-icons/bs';
import { useCartContext } from '../../../context/CartContext';

const CartItem = ({ item }) => {
    const { id, name, image, price, quantity } = item;
    const totalPrice = quantity * price;

    const { removeFromCart } = useCartContext();

    return (
        <Card className='cart-item' data-id={id}>
            <Card.Body className='cart-item__body'>
                <div className='cart-item__left'>
                    <Card.Img className='cart-item__image' variant='top' src={image} />
                </div>

                <div className='cart-item__right'>
                    <div className='product-info'>
                        <Link to={`/item/${id}`} className='cart-item__view-item-btn cart-item__title'><h3>{name}</h3></Link>

                        <Card.Text className='cart-item__qty'>Cantidad: { quantity }</Card.Text>
                    </div>

                    <div className='product-pricing'>
                        <Card.Text className='cart-item__total-price'>${formatStringIntegerLocale(totalPrice)}</Card.Text>

                        <Button className='btn btn-danger cart-item__btn-remove-item'
                            onClick={() => {
                                removeFromCart(id);
                            } }>
                            <span className='visually-hidden'>Eliminar del carrito</span>
                            <BsTrashFill />
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};


export {
    CartItem
}
