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



const ItemDetailContainer = () => {

    /**
     * item state
     */
    const [item, setItem] = useState(undefined);

    /**
     * loading state
     */
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // We temporarily hardcode an id
        loadItem(1)
        .then( (result) => {
            console.log('itemData', result);
            setItem(result);
        })
        .catch( (err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

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
