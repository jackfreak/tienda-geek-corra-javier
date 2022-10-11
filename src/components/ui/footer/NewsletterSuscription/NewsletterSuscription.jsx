/**
 * NewsletterSuscription component.
 *
 * @author Javier Alejandro Corra
 */

import './NewsletterSuscription.scss';
import { Form, Formik } from 'formik';
import { object } from 'yup';
import { EmailInputField } from '../../../../utils/forms/fields/EmailInputField';
import { getEmailSchema } from '../../../../utils/forms/formValidationRules';
import { useState } from 'react';


const newsletterSchema = object({
    email: getEmailSchema(),
});

const NewsletterSuscription = () => {
    const [formError, setFormError] = useState(null);

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        // Clear the error
        setFormError(null);

        // Emulate an asyc call to a service
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            // Remove all values in the form
            resetForm();

            // Call setSubmitting(false) to finish the cycle
            setSubmitting(false);
        }, 2000);
    };

    return (
        <div className='newsletter-suscription'>
            <h3>NEWSLETTER</h3>

            <div className='main-footer__box'>
                {(formError !== null) &&
                    <div className='alert alert-danger' role="alert">
                        <h4 className="alert-heading">Error</h4>
                        <p>{formError}</p>
                    </div>
                }

                <Formik
                    initialValues={{
                        email: '',
                    }}

                    validationSchema={newsletterSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <EmailInputField id='nsEmailInput' name='email' aria-labelledby='emailHelp'>
                                <div id='emailHelp' className='form-text'>Recibí las últimas novedades en tu correo</div>
                            </EmailInputField>

                            <button
                                type='submit'
                                className='btn btn-primary'
                                disabled={isSubmitting}
                            >
                                Suscribirse
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};


export {
    NewsletterSuscription
}
