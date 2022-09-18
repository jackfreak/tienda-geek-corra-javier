/**
 * CartContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './CartContainer.scss';
import { Alert, Button, Container } from 'react-bootstrap';
import { useCartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { formatStringIntegerLocale } from '../../../helpers/stringHelpers';
import { Link } from 'react-router-dom';


const CartContainer = () => {
    const { cart, getCartTotalPrice, emptyCart, isCartEmpty } = useCartContext();


    return (
        <Container className='cart-container'>
            <h2>Tu carrito</h2>

            {
                (isCartEmpty())
                ?
                <>
                    <Alert variant='primary'>
                        Tu carrito está vacío.
                    </Alert>

                    <Link to='/' className='btn btn-link'>Mira nuestros productos!</Link>
                </>
                :
                <>
                    <div className='cart-container__item-list'>
                        {cart.map((cartItem, index) => <CartItem key={index} item={cartItem} />)}
                    </div>

                    <div className='my-3'>
                        <h4>Total: ${formatStringIntegerLocale( getCartTotalPrice() )}</h4>

                        <Button onClick={ emptyCart } className='btn btn-danger'>Vaciar Carrito</Button>
                    </div>

                </>
            }





        </Container>
    );
};


export {
    CartContainer
}
