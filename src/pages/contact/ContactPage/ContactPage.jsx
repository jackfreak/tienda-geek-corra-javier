/**
 * ContactPage container component.
 *
 * @author Javier Alejandro Corra
 */

import './ContactPage.scss';
import { Form, Formik } from "formik";
import { object } from "yup";
import { EmailInputField } from "../../../utils/forms/fields/EmailInputField";
import { TextAreaField } from "../../../utils/forms/fields/TextAreaField";
import { TextInputField } from "../../../utils/forms/fields/TextInputField";
import { getEmailSchema, getMessageSchema, getNameSchema, getPhoneSchema } from "../../../utils/forms/formValidationRules";
import { useState } from 'react';

const contactSchema = object({
    name: getNameSchema(),
    lastname: getNameSchema(),
    phone: getPhoneSchema(),
    email: getEmailSchema(),
    message: getMessageSchema(500),
});


const ContactPage = () => {
    const [formError, setFormError] = useState(null);

    const initialValues = {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
    };

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
        <section className='contact-page container-fluid px-0'>
            <h2>Contacto</h2>

            <div className='row'>
                <div className='col-lg-6 col-sm-12' >
                    <p>Horarios de atención: De lunes a viernes de 10 a 20 hs.</p>
                    <p><i></i> <a href='mailto:contacto@tiendageek.netlify.io'>contacto@tiendageek.netlify.io</a></p>
                </div>

                <div className='col-lg-6 col-sm-12' >
                    {(formError !== null) &&
                        <div className='alert alert-danger' role="alert">
                            <h4 className="alert-heading">Error</h4>
                            <p>{formError}</p>
                        </div>
                    }

                    <Formik
                        initialValues={initialValues}
                        validationSchema={contactSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <TextInputField id='contactNameInput' name='name' label='Nombre' />
                                <TextInputField id='contactLastNameInput' name='lastname' label='Apellido' />
                                <TextInputField id='contactPhoneInput' name='phone' label='Teléfono' />
                                <EmailInputField id='contactEmailInput' name='email' label='Email' />
                                <TextAreaField id='contactMessageInput' name='message' label='Mensaje' rows='4' />

                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                    disabled={isSubmitting}
                                >
                                    Enviar
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};


export {
    ContactPage
}
