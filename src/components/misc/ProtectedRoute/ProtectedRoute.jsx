/**
 * ProtectedRoute component.
 *
 * @author Javier Alejandro Corra
 */

import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { AppRoute } from '../../../utils/constants/AppRoute';


const ProtectedRoute = ({ children, redirectPath = AppRoute.Login }) => {
    const { currentUser, isUserLoading } = useAuthContext();

    // While currentUser has an undefined state, do nothing
    if (isUserLoading) return null;

    if (!currentUser) {
        // Not logged-in so redirect to the redirectPath route with the return url.
        return (<Navigate to={redirectPath} replace={true} />);

    }
    // User authorised so return wrapped components
    return (<>{children}</>);
};


export {
    ProtectedRoute
}
