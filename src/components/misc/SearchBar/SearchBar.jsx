import './SearchBar.scss';

import { Container, Navbar, Form, Button }  from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Form className="d-flex">
                            <Form.Control type="search"
                                placeholder="Buscar" className="me-2" aria-label="Buscar"
                            />

                            <Button variant="outline-dark">
                                <BsSearch />
                                <span className="visually-hidden">Buscar</span>
                            </Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

};



export {
    SearchBar,
}
