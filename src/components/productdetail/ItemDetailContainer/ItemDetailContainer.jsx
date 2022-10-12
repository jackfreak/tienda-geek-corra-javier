/**
 * ItemDetailContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { loadProductDetail } from '../../../services/productsServices';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Loader } from '../../ui/Loader/Loader';

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState(undefined);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);

        loadProductDetail(itemId)
            .then((result) => {
                setItem(result);
            })
            .catch((err) => {
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
                        <Loader />
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
