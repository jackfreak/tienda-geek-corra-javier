import './SearchBar.scss';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
                                <i className="bi bi-search"></i>
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