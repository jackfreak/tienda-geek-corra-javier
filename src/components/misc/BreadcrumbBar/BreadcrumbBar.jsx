/**
 * BreadcrumbsBar component.
 *
 * @author Javier Alejandro Corra
 */

import './BreadcrumbBar.scss';

import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import { React } from 'react';
import { Container } from 'react-bootstrap';
import { capitalize } from '../../../utils/helpers/stringHelpers';
import { AppRoute } from '../../../utils/constants/AppRoute';


const DynamicItemBreadcrumb = ({ match }) => (
    // TODO: Get the name of the item
    <span>{capitalize(match.params.itemId)}</span>
);

const DynamicCategoryBreadcrumb = (data) => {
    const { match } = data;

    return <span>{capitalize(match.params.categoryId)}</span>;
};

// Define custom breadcrumbs for certain routes.
// Breadcumbs can be components or strings.
const routes = [
    {
        path: AppRoute.Home,
        breadcrumb: () => (
            <Link to={AppRoute.Home} className=''>
                Inicio
            </Link>
        ),
    },

    {
        path: AppRoute.Category,
        breadcrumb: null,
    },

    {
        path: `${AppRoute.Category}/:categoryId`,
        breadcrumb: DynamicCategoryBreadcrumb,
    },

    {
        path: AppRoute.Product,
        breadcrumb: null,
    },

    {
        path: `${AppRoute.Product}/:itemId`,
        breadcrumb: DynamicItemBreadcrumb,
    },
];

const BreadcrumbBar = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <Container className='my-3'>
            <nav aria-label='breadcrumb' className='breadcrumb-bar'>
                <ol className='breadcrumb' style={{ '--bs-breadcrumb-divider': "'>'" }}>
                    {breadcrumbs.map((data) => {
                        const { match, breadcrumb } = data;

                        return (
                            <li className='breadcrumb-item' key={match.pathname}>
                                {breadcrumb}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </Container>
    );
};

export { BreadcrumbBar };
