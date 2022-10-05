/**
 * ContactContainer component.
 *
 * @author Javier Alejandro Corra
 */

import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { object } from "yup";
import { EmailInputField } from "../../utils/forms/fields/EmailInputField";
import { TextAreaField } from "../../utils/forms/fields/TextAreaField";
import { TextInputField } from "../../utils/forms/fields/TextInputField";
import { getEmailSchema, getMessageSchema, getNameSchema, getPhoneSchema } from "../../utils/forms/formValidationRules";

import './ContactContainer.scss';


const ContactContainer = () => {

    const initialValues = {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
    };

    const validationSchema = object({
        name: getNameSchema(),
        lastname: getNameSchema(),
        phone: getPhoneSchema(),
        email: getEmailSchema(),
        message: getMessageSchema(500),
    });

    const onSubmit = (values, { setSubmitting }) => {
        // Emulate an asyc call to a service
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 2000);
    };


    return (
        <Container className='contact-container' as='section'>
            <h2>CONTACTO</h2>

            <Row>
                <Col>
                    <p>Horarios de atención: De lunes a viernes de 10 a 20 hs.</p>
                    <p><i></i> <span>contacto@tiendageek.netlify.io</span></p>
                </Col>

                <Col>
                    <Formik
                        initialValues={ initialValues }
                        validationSchema={ validationSchema }
                        onSubmit={ onSubmit }
                    >
                        <Form noValidate>
                            <TextInputField id='contactNameInput' name='name' label='Nombre' />
                            <TextInputField id='contactLastNameInput' name='lastname' label='Apellido' />
                            <TextInputField id='contactPhoneInput' name='phone' label='Teléfono'/>
                            <EmailInputField id='contactEmailInput' name='email' label='Email'/>
                            <TextAreaField id='contactMessageInput' name='message' label='Mensaje' rows='4'/>

                            <button type='submit' className='btn btn-primary'>Enviar</button>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};


export {
    ContactContainer
}
