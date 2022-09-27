/**
 * ItemListContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemListContainer.scss';

import { Col, Container, Row } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { loadProducts } from '../../../services/productsServices';
import { useParams } from 'react-router-dom';
import { Loader } from '../../ui/Loader/Loader';


const ItemListContainer = () => {
    //console.log('ItemListContainer');

    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    // TODO: Improve this !!!
    const getTitle = (categoryId) => {
        if (categoryId === 'comics') {
            return "Comics";

        } else if (categoryId === 'manga') {
            return "Manga";

        } else if (categoryId === 'figuras') {
            return "Figuras";

        } else if (categoryId === 'accesorios') {
            return "Accesorios";

        } else {
            return "Nuestros Productos";
        }
    };


    // Will execute on mount
    useEffect(() => {
        setLoading(true);

        loadProducts(categoryId)
        .then((result) => {
            setProducts(result);
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]);


    return (
        <Container className='item-list-container' as='section'>
            <Row><Col><h2 className='item-list-container__title'>{ getTitle(categoryId) }</h2></Col></Row>

            {
                (loading)
                ?
                <Row>
                    <Col className='item-list-container__cell'>
                        <Loader />
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
