/**
 * Loader component.
 *
 * @author Javier Alejandro Corra
 */

import { Spinner } from "react-bootstrap";

//import './Loader.scss';


const Loader = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    );
};


export {
    Loader
}
