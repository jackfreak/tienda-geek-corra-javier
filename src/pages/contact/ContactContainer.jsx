/**
 * ContactContainer component.
 *
 * @author Javier Alejandro Corra
 */

import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

import './ContactContainer.scss';


const ContactContainer = () => {
    return (
        <>
            <Container className='contact-container' as='section'>
                <h2>CONTACTO</h2>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <p>Horarios de atención: De lunes a viernes de 10 a 20 hs.</p>
                        <p><i></i> <span>contacto@tiendageek.netlify.io</span></p>
                    </Col>

                    <Col>
                        <Form>
                            <FormGroup>
                                <FormLabel>Nombre:</FormLabel>
                                <FormControl></FormControl>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Email:</FormLabel>
                                <FormControl></FormControl>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Teléfono:</FormLabel>
                                <FormControl></FormControl>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Mensaje:</FormLabel>
                                <FormControl></FormControl>
                            </FormGroup>

                            <FormGroup className="my-3">
                                <Button variant="primary">Enviar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );
};


export {
    ContactContainer
}
