/**
 * ItemList component.
 *
 * @author Javier Alejandro Corra
 */

import './ItemList.scss';
import { Alert, Col, Row } from "react-bootstrap";
import { Item } from "../Item/Item";


const ItemList = ({ items = [] }) => {
    return (
        <Row className='item-list g-0'> {
            (items.length > 0)
                ?
                // Notice the key prop, it must be in the parent element, not on the Item!!
                items.map((item) => {
                    return <Col lg={4} className='cell' key={item.id}>
                        <Item itemData={item} />
                    </Col>
                })
                :
                <Alert variant='primary'>
                    No se encontraron productos para esta categoría.
                </Alert>
        }
        </Row>
    )
}


export {
    ItemList
}
