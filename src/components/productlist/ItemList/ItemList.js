import { Col, Row } from "react-bootstrap";
import { Item } from "../Item/Item";
import "./ItemList.scss";


const ItemList = ({items = []}) => {

    return (
        <Row className='item-list g-0'>
        {
            items.map( (item) => {
                return <Col lg={4} className='cell'>
                    <Item key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    stock={item.stock}
                    price={item.price}
                    />
                </Col>
            })
        }
        </Row>
    )
}


export {
    ItemList
}
