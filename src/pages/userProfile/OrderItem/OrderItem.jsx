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
import { AppRoute } from '../../../utils/constants/AppRoute';
import { Link } from 'react-router-dom';

dayjs.extend(LocalizedFormat);


const OrderItem = ({ data }) => {
    const { id, createdAt, items, total } = data;

    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Timestamp
    const orderDate = new Timestamp(createdAt.seconds, createdAt.nanoseconds).toDate();
    const dayjsDate = dayjs(orderDate);

    const formattedDateISO = dayjsDate.format(); // in ISO8601
    const formattedDateText = dayjsDate.format('LLLL'); // format based on locale

    return (
        <div className='card order-item'>
            <div className='card-header'>
                <strong>
                    <time dateTime={formattedDateISO}>{formattedDateText}</time>
                </strong>
            </div>

            <div className='card-body'>
                <p>Orden: <strong>{id}</strong></p>
                <p>Total: $ {formatStringIntegerLocale(total)}</p>

                <ul className='vstack gap-2'>
                    {
                        items.map((item) => {
                            return (<li className='d-flex align-items-start' key={item.id}>
                                <span className='badge text-bg-secondary'>{item.quantity}x</span>
                                <Link to={`${AppRoute.Product}/${item.id}`} className='ms-2 link-dark'>{item.name}</Link>
                            </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export { OrderItem };
