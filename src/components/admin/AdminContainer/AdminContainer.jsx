/**
 * AdminContainer component.
 *
 * @author Javier Alejandro Corra
 */

//import './AdminContainer.scss';

import { Button, Container } from 'react-bootstrap';
import { createProducts } from '../../../helpers/services/uploadProductsService';



const AdminContainer = () => {
    return (
        <Container>
            <Button onClick={createProducts}>CREATE PRODUCTS</Button>
        </Container>
    );
};


export {
    AdminContainer
}
