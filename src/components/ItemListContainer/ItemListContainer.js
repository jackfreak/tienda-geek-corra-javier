import './ItemListContainer.scss';

import { Container } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { loadProducts } from '../../helpers/loadProducts';



const ItemListContainer = () => {
    console.log('ItemListContainer');
    
    /**
     * products
     */
    const [products, setProducts] = useState([]);



    // Will execute on mount 
    useEffect( () => {
      loadProducts()
      .then((result) => {
        //console.log('then', result);
        setProducts(result)
      })
      .catch((err) => {
        console.error(err);
      });
    }, []);


    // Render
    return (
        <Container className='item-list-container'>
            <h2>Nuestros Productos</h2>

            <ItemList items={products}/>
        </Container>
    );
}


export {
    ItemListContainer,
}