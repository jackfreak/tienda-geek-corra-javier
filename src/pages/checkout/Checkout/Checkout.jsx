/**
 * Checkout component.
 *
 * @author Javier Alejandro Corra
 */

import './Checkout.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartContext';
import { useForm } from '../../../hooks/useForm';
import { sendPurchaseOrder } from '../../../services/purchaseOrderServices';
import { AppRoute } from '../../../utils/constants/AppRoute';
import { PurchaseResult } from '../PurchaseResult/PurchaseResult';
import { StatusCode } from '../../../services/helpers/statusCodes.constants';
import { Loader } from '../../../components/ui/Loader/Loader';


const Checkout = () => {
    const { cart, getCartTotalPrice, emptyCart } = useCartContext();

    const [purchaseResult, setPurchaseResult] = useState(null);
    const [loading, setLoading] = useState(false);

    /*
    TEST VALUES
    name: 'Javier',
    lastname: 'Corra',
    email: 'jackfreak@gmail.com',
    address: 'Siempreviva 1234',
    */

    const { formData, handleInputChange } = useForm({
        name: '',
        lastname: '',
        email: '',
        address: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const po = {
            buyerInfo: formData,
            items: cart,
            created: '', // NOTE: This value will be overwritten by the service
            total: getCartTotalPrice(),
        };

        // TODO: IMPROVE FORM VALIDATION
        if (formData.name.length < 2) {
            alert('Nombre invalido');
            return;
        }

        if (formData.lastname.length < 2) {
            alert('Apellido invalido');
            return;
        }

        if (formData.email.length === 0) {
            alert('Email invalido');
            return;
        }

        if (formData.address.length < 2) {
            alert('Direccion invalida');
            return;
        }

        setLoading(true);

        const poResult = await sendPurchaseOrder(cart, po);
        //console.log('poResult', poResult);

        setLoading(false);

        setPurchaseResult(poResult);

        if (poResult.status === StatusCode.SUCCESS) {
            emptyCart();
        }
    };

    // This use case must go first, because when the purchase is successful the cart emptied.
    if (purchaseResult !== null) {
        return (
            <PurchaseResult result={purchaseResult}></PurchaseResult>
        )
    }

    // Check cart state, if it's empty we don't allow access to the checkout page.
    if (cart.length === 0) {
        return <Navigate to={AppRoute.Root} />
    }

    return (
        <section className='checkout container'>
            <h2>Checkout</h2>

            {
                loading
                    ?
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                    :
                <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='nameInput' className='form-label'>
                        Nombre
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='nameInput'
                        className='form-control'
                        autoComplete='name'
                        placeholder=''
                        value={formData.name}
                        onChange={handleInputChange} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='lastNameInput' className='form-label'>
                        Apellido
                    </label>
                    <input
                        type='text'
                        name='lastname'
                        id='lastNameInput'
                        className='form-control'
                        autoComplete='lastname'
                        placeholder=''
                        value={formData.lastname}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='emailInput' className='form-label'>
                        E-mail
                    </label>
                    <input
                        type='email'
                        name='email'
                        id='emailInput'
                        className='form-control'
                        autoComplete='email'
                        placeholder='email@email.com'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='addressInput' className='form-label'>
                        Dirección
                    </label>
                    <input
                        type='text'
                        name='address'
                        id='addressInput'
                        className='form-control'
                        autoComplete='address'
                        placeholder=''
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </div>

                <button type='submit' className='btn btn-primary'>
                    Enviar
                </button>
            </form>
            }


        </section>
    );
};

export { Checkout };
