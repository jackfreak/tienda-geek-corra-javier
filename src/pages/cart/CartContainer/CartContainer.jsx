/**
 * CartContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './CartContainer.scss';
import { Alert, Button, Container } from 'react-bootstrap';
import { useCartContext } from '../../../contexts/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { formatStringIntegerLocale } from '../../../utils/helpers/stringHelpers';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/AppRoute';

const CartContainer = () => {
    const { cart, getCartTotalPrice, emptyCart, isCartEmpty } = useCartContext();
    const navigate = useNavigate();

    return (
        <Container className='cart-container'>
            <h2>Tu carrito</h2>

            {isCartEmpty() ? (
                <>
                    <Alert variant='primary'>Tu carrito está vacío.</Alert>

                    <Link to={AppRoute.Root} className='btn btn-link'>
                        Mira nuestros productos!
                    </Link>
                </>
            ) : (
                <>
                    <div className='cart-container__item-list'>
                        {cart.map((cartItem) => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))}
                    </div>

                    <div className='my-3'>
                        <h4>Total: ${formatStringIntegerLocale(getCartTotalPrice())}</h4>

                        <Button onClick={emptyCart} className='btn btn-danger'>
                            Vaciar Carrito
                        </Button>

                        <Button onClick={() => {
                                navigate(AppRoute.Checkout);
                            }}
                            className='btn btn-primary ms-3'>
                            Terminar Compra
                        </Button>
                    </div>
                </>
            )}
        </Container>
    );
};

export { CartContainer };
