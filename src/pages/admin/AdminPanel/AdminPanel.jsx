/**
 * AdminPanel container component.
 *
 * The Admin Panel that grants permission to a user with admin role,
 * to perform predefined actions in the Firestore database.
 *
 * For example:
 * + Restore the stock of all the products.
 * + Create and/or upload a new products collection from a local JSON file.
 *
 * @author Javier Alejandro Corra
 */

import './AdminPanel.scss';

import { Button, Modal } from 'react-bootstrap';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/AppRoute';
import { resetStock } from '../../../services/uploadProductsService';
import { useState } from 'react';


const AdminPanel = () => {
    const { isAdmin } = useAuthContext();

    const [showModal, setShowModal] = useState(false);
    //const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };


    const handleResetStock = (e) => {
        setShowModal(true);
    };

    const handleResetStockConfirmation = async (e) => {
        // TODO: POPUP WARNING MESSAGE

        await resetStock();

        setShowModal(false);

        alert('Stock reset SUCCESSFUL');
    };

    // ONLY users with "admin" role are authorised
    if (!isAdmin()) {
        return (<Navigate to={AppRoute.Home} />);
    }

    return (
        <section className='admin-panel'>
            <h2>Admin Panel</h2>
            {/* <Button onClick={createProducts}>CREATE PRODUCTS</Button> */}

            <p>Reset the stock of all the products to a value of <strong>10</strong> each.</p>
            <Button variant='danger' onClick={handleResetStock}>
                RESET STOCK
            </Button>

            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        WARNING
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Are you sure you want to reset the stock?</h5>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>No</Button>
                    <Button variant='danger' onClick={handleResetStockConfirmation}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export { AdminPanel };
