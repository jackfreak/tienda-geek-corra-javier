/**
 * PurchaseResult component.
 *
 * @author Javier Alejandro Corra
 */

import { PurchaseResultDetail } from '../PurchaseResultDetail/PurchaseResultDetail';
import './PurchaseResult.scss';


const PurchaseResult = ({ result }) => {
    return (
        <section className='purchase-result container'>
            <PurchaseResultDetail result={result} />
        </section>
    );
};


export {
    PurchaseResult
}
