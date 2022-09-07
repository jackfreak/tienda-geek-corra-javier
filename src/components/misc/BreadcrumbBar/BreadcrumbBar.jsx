/**
 * BreadcrumbsBar component.
 *
 * @author Javier Alejandro Corra
 */

import './BreadcrumbBar.scss';

import useBreadcrumbs  from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import { React } from 'react';
import { Container } from 'react-bootstrap';
//import { Breadcrumb } from 'react-bootstrap';

/*

<Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>

*/

const DynamicUserBreadcrumb = ({ match }) => (
    //<span>{userNamesById[match.params.userId]}</span>
    <span>{match.params.userId}</span>
);

const CustomPropsBreadcrumb = ({ someProp }) => (
    <span>{someProp}</span>
);

// Define custom breadcrumbs for certain routes.
// Breadcumbs can be components or strings.
const routes = [
    { path: '/', breadcrumb: 'Inicio' },
    { path: '/category/:categoryId', breadcrumb: DynamicUserBreadcrumb },
    { path: '/custom-props', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Hi' }},
];

const BreadcrumbBar = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <Container className='my-3'>
            <nav aria-label="breadcrumb" className='breadcrumb-bar'>
                <ol class="breadcrumb" style={{ '--bs-breadcrumb-divider': "'>'" }}>
                    {
                        breadcrumbs.map(({ match, breadcrumb }) => (
                        <li class="breadcrumb-item" key={match.pathname}>
                            <Link to={match.pathname} className=''>{breadcrumb}</Link>
                        </li>
                    ))
                    }
                </ol>
            </nav>
        </Container>
    );
};


export {
    BreadcrumbBar
}
