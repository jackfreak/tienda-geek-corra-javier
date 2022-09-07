/**
 * ItemDetailContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { loadItem } from '../../../helpers/loadItem';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    /**
     * itemId
     */
    const { itemId } = useParams();

    /**
     * item state
     */
    const [item, setItem] = useState(undefined);

    /**
     * loading state
     */
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);

        loadItem(itemId)
        .then( (result) => {
            //console.log('itemData', result);
            setItem(result);
        })
        .catch( (err) => {
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [itemId]);

    return (
        <Container className='item-detail-container' as='section'>
            {
                (loading)
                ?
                <div className='item-detail-container__cell'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                </div>
                :
                <ItemDetail itemData={item} />
            }
        </Container>
    );
};


export {
    ItemDetailContainer
}
