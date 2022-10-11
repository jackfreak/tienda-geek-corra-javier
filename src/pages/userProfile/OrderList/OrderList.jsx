/**
 * OrderList component.
 *
 * @author Javier Alejandro Corra
 */


import "./OrderList.scss";
import { Alert } from "react-bootstrap";
import { OrderItem } from '../OrderItem/OrderItem';


const OrderList = ({ orders = [] }) => {

    return (
        <div className='order-list'> {
            (orders.length > 0)
                ?
                orders.map((item) => {
                    return <OrderItem data={item} key={item.id} />
                })
                :
                <Alert variant='primary'>
                    No tienes ordenes de compra previas.
                </Alert>
        }
        </div>
    )
}


export {
    OrderList
}
