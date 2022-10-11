/**
 * OrderItem component.
 *
 * @author Javier Alejandro Corra
 */

import './OrderItem.scss';

import { formatStringIntegerLocale } from '../../../utils/helpers/stringHelpers';
//import { Link } from 'react-router-dom';
//import { AppRoute } from '../../../utils/constants/AppRoute';
import { Timestamp } from 'firebase/firestore';

import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat);


const OrderItem = ({ data }) => {
    const { id, createdAt, items, total } = data;

    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Timestamp
    const orderDate = new Timestamp(createdAt.seconds, createdAt.nanoseconds).toDate();
    const dayjsDate = dayjs(orderDate);

    const formattedDateISO = dayjsDate.format(); // in ISO8601
    const formattedDateText = dayjsDate.format('LLLL'); // format based on locale

    console.log(data);

    return (
        <div className='order-item'>

            <p>Orden: <strong>{id}</strong></p>
            <p>Fecha: <time datetime={formattedDateISO}>{formattedDateText}</time></p>
            <p>Total: $ {formatStringIntegerLocale(total)}</p>

            <ul className='vstack gap-2'>
                {
                    items.map((item) => {
                        return (<li className='d-flex align-items-start' key={item.id}>
                            <span className='badge text-bg-secondary'>{item.quantity}x</span>
                            <span className='ms-2'>{item.name}</span>
                        </li>);
                    })
                }
            </ul>
        </div>
    );
};

export { OrderItem };
