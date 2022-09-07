/**
 * ItemListContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemListContainer.scss';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { loadItems } from '../../../helpers/loadItems';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    //console.log('ItemListContainer');

    /**
     * categoryId
     */
    const { categoryId } = useParams();
    //console.log(categoryId);

    /**
     * products state
     */
    const [products, setProducts] = useState([]);

    /**
     * loading state
     */
    const [loading, setLoading] = useState(true);


    // TODO: Improve this !!!
    const getTitle = (categoryId) => {
        if (categoryId === 'comics') {
            return "Comics";

        } else if (categoryId === 'manga') {
            return "Manga";

        } else if (categoryId === 'figuras') {
            return "Action Figures";

        } else if (categoryId === 'accesorios') {
            return "Accesorios";

        } else {
            return "Nuestros Productos";
        }
    };



    // Will execute on mount
    useEffect(() => {
        setLoading(true);

        loadItems()
        .then((result) => {
            if(!categoryId) {
                setProducts(result);

            } else {
                const filteredByCategory = result.filter( (product) => (product.categoryId === categoryId) );
                setProducts(filteredByCategory);
            }
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]);


    // Render
    return (
        <Container className='item-list-container' as='section'>
            <Row><Col><h2 className='item-list-container__title'>{ getTitle(categoryId) }</h2></Col></Row>

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
    ItemListContainer
}
