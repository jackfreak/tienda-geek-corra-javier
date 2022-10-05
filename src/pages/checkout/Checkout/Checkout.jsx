/**
 * Checkout component.
 *
 * @author Javier Alejandro Corra
 */

import './Checkout.scss';
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
import { getEmailSchema, getNameSchema } from '../../../utils/forms/formValidationRules';
import { object } from 'yup';


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

    const initialValues = {
        name: '',
        lastname: '',
        email: '',
        address: '',
    };

    const validationSchema = object({
        name: getNameSchema(),
        lastname: getNameSchema(),
        address: getNameSchema(),
        email: getEmailSchema(),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        const po = {
            buyerInfo: values,
            items: cart,
            created: '', // NOTE: This value will be overwritten by the service
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

        // Emulate an asyc call to a service
        /*
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 2000);
        */
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
                <Formik
                    initialValues={ initialValues }
                    validationSchema={ validationSchema }
                    onSubmit={ onSubmit }
                >
                    <Form noValidate>
                        <TextInputField id='checkoutNameInput' name='name' label='Nombre' />
                        <TextInputField id='checkoutLastNameInput' name='lastname' label='Apellido' />
                        <TextInputField id='checkoutAddressInput' name='address' label='Dirección'/>
                        <EmailInputField id='contactEmailInput' name='email' label='Email'/>

                        <button type='submit' className='btn btn-primary'>Enviar</button>
                    </Form>
                </Formik>
            }
        </section>
    );
};

export { Checkout };
