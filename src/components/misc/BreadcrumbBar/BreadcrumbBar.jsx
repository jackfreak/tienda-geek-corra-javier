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
import { capitalize } from '../../../helpers/stringHelpers';
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

const DynamicItemBreadcrumb = ({ match }) => (
    // TODO: Get the name of the item
    <span>{ capitalize(match.params.itemId) }</span>
);

const DynamicCategoryBreadcrumb = (data) => {
    //console.log('DynamicCategoryBreadcrumb', data);
    const { match } = data;

    return (<span>{ capitalize( match.params.categoryId ) }</span>)
    //return (<Link to={match.pathname} className=''>{ match.params.categoryId }</Link>);
};


/*
const CustomPropsBreadcrumb = ({ someProp }) => (
    <span>{someProp}</span>
);
*/

/*


*/

// Define custom breadcrumbs for certain routes.
// Breadcumbs can be components or strings.
const routes = [
    {
        path: '/',
        breadcrumb: () => (<Link to='/' className=''>Inicio</Link>)
    },

    {
        path: '/category',
        breadcrumb: null,
    },

    {
        path: '/category/:categoryId',
        breadcrumb: DynamicCategoryBreadcrumb,
    },

     {
        path: '/item',
        breadcrumb: null,
    },

    {
        path: '/item/:itemId',
        breadcrumb: DynamicItemBreadcrumb,
    },
    //{ path: '/custom-props', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Hi' }},
];

const BreadcrumbBar = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <Container className='my-3'>
            <nav aria-label="breadcrumb" className='breadcrumb-bar'>
                <ol className="breadcrumb" style={{ '--bs-breadcrumb-divider': "'>'" }}>
                    {
                        breadcrumbs.map((data) => {
                            //console.log(data);

                            const { match, breadcrumb } = data;

                            return (
                                <li className="breadcrumb-item" key={match.pathname}>
                                    {/*<Link to={match.pathname} className=''>{breadcrumb}</Link>*/}
                                    {breadcrumb}
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        </Container>
    );
};


export {
    BreadcrumbBar
}
