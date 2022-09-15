/**
 * CartContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './CartContainer.scss';
import { Button, Container } from 'react-bootstrap';
import { useCartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';


const CartContainer = () => {
    const { cart, getCartTotalPrice, emptyCart } = useCartContext();


    return (
        <Container className='cart-container'>
            <h2>Tu carrito</h2>

            <div className='cart-container__item-list'>
                {cart.map((cartItem, index) => <CartItem key={index} item={cartItem} />)}
            </div>

            <div className='my-3'>
                <h4>Total: ${formatStringIntegerLocale( getCartTotalPrice() )}</h4>

                <Button onClick={ emptyCart } className='btn btn-danger'>Vaciar Carrito</Button>
            </div>

        </Container>
    );
};


export {
    CartContainer
}
