/**
 * OrderListContainer component.
 *
 * @author Javier Alejandro Corra
 */

import './OrderListContainer.scss';

import { OrderList } from '../OrderList/OrderList';
import { useEffect, useState } from 'react';
import { Loader } from '../../../components/ui/Loader/Loader';
import { loadPurchaseOrders } from '../../../services/purchaseOrderServices';
import { useAuthContext } from '../../../contexts/AuthContext';



const OrderListContainer = () => {
    //console.log('OrderListContainer');
    const { currentUser } = useAuthContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Will execute on mount
    useEffect(() => {
        setLoading(true);

        console.log('orderlistcontainer mount', currentUser);

        loadPurchaseOrders(currentUser.email)
            .then((result) => {
                console.log('ORDERS', result);
                setOrders(result);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [currentUser]); // TODO: is user really neccesary?


    return (
        <div className='order-list-container'>
            <h3 className='order-list-container__title'>Mis compras</h3>

            <div className='order-list-container__cell'>{
                (loading)
                    ?
                    <Loader />
                    :
                    <OrderList orders={orders} />
            }</div>
        </div>
    );
}


export {
    OrderListContainer
}
