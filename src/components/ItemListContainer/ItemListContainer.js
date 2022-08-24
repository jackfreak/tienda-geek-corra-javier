import './ItemListContainer.scss';
import { Container } from 'react-bootstrap';



const ItemListContainer = ({children}) => {


    return (
        <Container className='item-list-container'>
            <h2>Nuestros Productos</h2>

            <div className='product-list'>
                {children}
            </div>
        </Container>
    );
}


export {
    ItemListContainer,
}