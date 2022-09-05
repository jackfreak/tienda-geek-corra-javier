import './ItemListContainer.scss';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { loadItems } from '../../../helpers/loadItems';



const ItemListContainer = () => {
    console.log('ItemListContainer');

    /**
     * products state
     */
    const [products, setProducts] = useState([]);

    /**
     * loading state
     */
    const [loading, setLoading] = useState(true);



    // Will execute on mount
    useEffect( () => {
        loadItems()
        .then((result) => {
            //console.log('then', result);
            setProducts(result)
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);


    // Render
    return (
        <Container className='item-list-container' as='section'>
            <Row><Col><h2 className='item-list-container__title'>Nuestros Productos</h2></Col></Row>

            {
                (loading)
                ?
                <Row>
                    <Col className='item-list-container__cell'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </Col>
                </Row>
                :
                <ItemList items={products} />
            }

        </Container>
    );
}


export {
    ItemListContainer,
}
