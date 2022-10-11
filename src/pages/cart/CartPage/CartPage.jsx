/**
 * CartPage container component.
 *
 * @author Javier Alejandro Corra
 */

import './CartPage.scss';
import { Alert, Button } from 'react-bootstrap';
import { useCartContext } from '../../../contexts/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { formatStringIntegerLocale } from '../../../utils/helpers/stringHelpers';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/AppRoute';


const CartPage = () => {
    const { cart, getCartTotalPrice, emptyCart, isCartEmpty } = useCartContext();
    const navigate = useNavigate();

    return (
        <section className='cart-page'>
            <h2>Tu carrito</h2>

            {isCartEmpty() ? (
                <>
                    <Alert variant='primary'>Tu carrito está vacío.</Alert>

                    <Link to={AppRoute.Home} className='btn btn-link'>
                        Mira nuestros productos!
                    </Link>
                </>
            ) : (
                <>
                    <div className='cart-page__item-list'>
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
        </section>
    );
};

export { CartPage };
