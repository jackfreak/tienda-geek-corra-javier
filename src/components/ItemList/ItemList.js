import { Item } from "../Item/Item";
import "./ItemList.scss";

const ItemList = ({items = []}) => {
    
    return (
        <div className='item-list'>
        { 
            items.map( (item) => {
                return <Item key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description} 
                    image={item.image}
                    stock={item.stock}
                    price={item.price}
                    />
            })
        }
        </div>
    )
}


export {
    ItemList,
}