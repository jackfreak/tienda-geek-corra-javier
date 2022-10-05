/**
 * NewsletterSuscription component.
 *
 * @author Javier Alejandro Corra
 */

import { Form, Formik } from 'formik';
import { object } from 'yup';
import { EmailInputField } from '../../../../utils/forms/fields/EmailInputField';
import { getEmailSchema } from '../../../../utils/forms/formValidationRules';
import './NewsletterSuscription.scss';

// A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
 /*
const validate = (values) => {
    const errors = {};

  if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};
*/

const NewsletterSuscription = () => {

    const validationSchema = object({
        email: getEmailSchema(),
    });

    const onSubmit = (values, { setSubmitting }) => {
        // Emulate an asyc call to a service
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 2000);
    };

    return (
        <div className='newsletter-suscription'>
            <h3>NEWSLETTER</h3>

            <div className='main-footer__box'>
                <Formik
                    initialValues={{
                        email: '',
                    }}

                    validationSchema={ validationSchema }
                    onSubmit={ onSubmit }
                >
                    <Form noValidate>
                        <EmailInputField id='nsEmailInput' name='email' aria-labelledby='emailHelp'>
                            <div id='emailHelp' className='form-text'>Recibí las últimas novedades en tu correo</div>
                        </EmailInputField>

                        <button type='submit' className='btn btn-primary'>Suscribirse</button>
                    </Form>

                </Formik>
            </div>
        </div>
    );
};


export {
    NewsletterSuscription
}
