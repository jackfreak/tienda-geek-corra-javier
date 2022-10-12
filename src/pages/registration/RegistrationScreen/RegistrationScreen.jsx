/**
 * RegistrationScreen container component.
 *
 * @author Javier Alejandro Corra
 */

import './RegistrationScreen.scss';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Form, Formik } from 'formik';
import { EmailInputField } from '../../../utils/forms/fields/EmailInputField';
import { getEmailSchema, getPasswordSchema } from '../../../utils/forms/formValidationRules';
import { object } from 'yup';
import { TextInputField } from '../../../utils/forms/fields/TextInputField';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/AppRoute';


const registrationSchema = object({
    email: getEmailSchema(),
    password: getPasswordSchema(),
});


const RegistrationScreen = () => {
    const { currentUser, signup } = useAuthContext();
    const [formError, setFormError] = useState(null);
    //const navigate = useNavigate();

    const onSubmit = async (values, { setSubmitting }) => {
        // Clear the error
        setFormError(null);

        try {
            await signup(values.email, values.password);

            // Call setSubmitting(false) to finish the cycle
            setSubmitting(false);

            //navigate(AppRoute.Home);

        } catch (err) {
            // TODO: Use error codes to give a better error message to the user
            //const errorCode = error.code;
            setFormError(err.message);
        }
    };

    // If the user is already logged-in, redirect to home
    if (currentUser) {
        return (<Navigate to={AppRoute.Home} />);
    }

    return (
        <section className='registration-screen'>
            <h2>Crear Cuenta</h2>

            {(formError !== null) &&
                <div className='alert alert-danger' role="alert">
                    <h4 className="alert-heading">Error</h4>
                    <p>{formError}</p>
                </div>
            }

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={registrationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <EmailInputField id='loginEmailInput' name='email' label='Email' placeholder='email@email.com' autoComplete='email' />
                        <TextInputField
                            id='loginPasswordInput'
                            name='password'
                            label='Contraseña'
                            type='password'
                            autoComplete='current-password'
                            aria-describedby='passwordHelpInline'>
                            <p id='passwordHelpInline' className='form-text'>La contraseña debe contener 6 caracteres como mínimo.</p>
                        </TextInputField>

                        <button
                            type='submit'
                            className='btn btn-primary'
                            disabled={isSubmitting}
                        >
                            Crear Cuenta
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export { RegistrationScreen };
