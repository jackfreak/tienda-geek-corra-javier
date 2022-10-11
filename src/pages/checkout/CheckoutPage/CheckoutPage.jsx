/**
 * CheckoutPage container component.
 *
 * @author Javier Alejandro Corra
 */

import './CheckoutPage.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartContext';
import { sendPurchaseOrder } from '../../../services/purchaseOrderServices';
import { AppRoute } from '../../../utils/constants/AppRoute';
import { PurchaseResult } from '../PurchaseResult/PurchaseResult';
import { StatusCode } from '../../../services/helpers/statusCodes.constants';
import { Loader } from '../../../components/ui/Loader/Loader';
import { Form, Formik } from 'formik';
import { TextInputField } from '../../../utils/forms/fields/TextInputField';
import { EmailInputField } from '../../../utils/forms/fields/EmailInputField';
import { getAddressSchema, getEmailSchema, getNameSchema } from '../../../utils/forms/formValidationRules';
import { object } from 'yup';
import { useAuthContext } from '../../../contexts/AuthContext';


const CheckoutPage = () => {
    const { cart, getCartTotalPrice, emptyCart } = useCartContext();
    const { user } = useAuthContext();

    const [purchaseResult, setPurchaseResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const initialValues = {
        name: '',
        lastname: '',
        email: (user) ? user.email : '',
        address: '',
    };

    const validationSchema = object({
        name: getNameSchema(),
        lastname: getNameSchema(),
        address: getAddressSchema(),
        email: getEmailSchema(),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        const po = {
            buyerInfo: values,
            items: cart,
            createdAt: '', // NOTE: This value will be overwritten by the service
            total: getCartTotalPrice(),
        };

        setLoading(true);

        const poResult = await sendPurchaseOrder(cart, po);
        //console.log('poResult', poResult);

        setLoading(false);

        setPurchaseResult(poResult);

        if (poResult.status === StatusCode.SUCCESS) {
            emptyCart();
        }
    };

    // This use case must go first, because when the purchase is successful the cart is emptied.
    if (purchaseResult !== null) {
        return (
            <PurchaseResult result={purchaseResult}></PurchaseResult>
        )
    }

    // Check cart state, if it's empty we don't allow access to the checkout page.
    if (cart.length === 0) {
        return <Navigate to={AppRoute.Home} />
    }

    return (
        <section className='checkout-page'>
            <h2>Checkout</h2>

            {
                loading
                    ?
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                    :
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form noValidate>
                            <TextInputField id='checkoutNameInput' name='name' label='Nombre' />
                            <TextInputField id='checkoutLastNameInput' name='lastname' label='Apellido' />
                            <TextInputField id='checkoutAddressInput' name='address' label='Dirección' />
                            <EmailInputField
                                id='contactEmailInput'
                                name='email'
                                label='Email'
                                readOnly={(user !== null)}
                                disabled={(user !== null)}
                            />

                            <button type='submit' className='btn btn-primary'>Enviar</button>
                        </Form>
                    </Formik>
            }
        </section>
    );
};

export { CheckoutPage };
