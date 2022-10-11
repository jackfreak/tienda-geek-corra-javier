/**
 * ProtectedRoute component.
 *
 * @author Javier Alejandro Corra
 */

//import './ProtectedRoute.scss';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { AppRoute } from '../../../utils/constants/AppRoute';



const ProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();

    // While user has an undefined state, do nothing
    if (user === undefined) return null;

    if (user === null) {
        return (<Navigate to={AppRoute.Home} />);
    }

    return children;
};


export {
    ProtectedRoute
}
