import './ItemListContainer.scss';
import products from '../../data/products.json';
import { Container } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';



const ItemListContainer = () => {
        /*
        <Item 
          id='1' 
          name='PlayStation DualSense Wireless Controller - Midnight Black' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas egestas nibh, eu lacinia justo scelerisque a.'
          image='./images/61O9tWR6WDS._AC_UY218_.jpg'
        />

        <Item 
          id='2'
          name='Xbox Core Wireless Controller – Carbon Black'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas egestas nibh, eu lacinia justo scelerisque a.'
          image='./images/61z3GQgEPZL._AC_UY218_.jpg'/>

        <Item 
          id='3'
          name='Nintendo Switch Pro Controller' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas egestas nibh, eu lacinia justo scelerisque a.'
          image='./images/61drpi3cYUL._AC_UY218_.jpg' />
          */

          //console.log(products);

    return (
        <Container className='item-list-container'>
            <h2>Nuestros Productos</h2>

            <ItemList products={products}/>
        </Container>
    );
}


export {
    ItemListContainer,
}