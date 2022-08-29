import { Item } from "../Item/Item";
import "./ItemList.scss";

const ItemList = ({products = []}) => {
    
    return (
        <div className='item-list'>
        { 
            products.map( (prod) => {
                return <Item key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    description={prod.description} 
                    image={prod.image}
                    stock={prod.stock}
                    price={prod.price}
                    />
            })
        }
        </div>
    )
}


export {
    ItemList,
}