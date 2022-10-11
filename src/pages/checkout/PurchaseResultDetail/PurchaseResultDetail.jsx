/**
 * PurchaseResultDetail component.
 *
 * @author Javier Alejandro Corra
 */

import { Link } from 'react-router-dom';
import { StatusCode } from '../../../services/helpers/statusCodes.constants';
import { AppRoute } from '../../../utils/constants/AppRoute';
import './PurchaseResultDetail.scss';


const PurchaseResultDetail = ({ result }) => {
    const { poId, status } = result;

    if (status === StatusCode.BATCH_ERROR) {
        return (<>
            <h2>Ocurrio un error</h2>
            <p>No se pudo realizar la compra.</p>
        </>);
    }

    if (status === StatusCode.OUT_OF_STOCK) {
        return (<>
            <h2>No se pudo completar tu orden de compra</h2>
            <p>Lo sentimos pero nos quedamos sin stock de los siguientes productos:</p>

            <ul>
                {
                    result.outOfStock.map((item) => {
                        //console.log(item.id);
                        return (
                            <li key={item.id}>
                                <Link to={`${AppRoute.Product}/${item.id}`} className=''>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            <p className='mt-5'>Comunicate con nosotros y te diremos cuando repondremos el stock. ¡Muchas gracias!</p>
        </>);
    }

    // Generic error, a catch-all use-case (anything but SUCCESS)
    if (status !== StatusCode.SUCCESS) {
        return (<>
            <h2>Ocurrio un error</h2>
            <p>No se pudo realizar la compra. Por favor intentá de nuevo.</p>
        </>);
    }

    // Last but not least... the success use-case.
    return (
        <>
            <h2>Compra Exitosa</h2>
            <p>Tu número de orden es: <strong>{poId}</strong></p>
        </>
    );
};


export {
    PurchaseResultDetail
}
