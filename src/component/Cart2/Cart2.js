import React from 'react';
import { Card } from 'react-bootstrap';
// import CartGroup2 from '../CartGroup2/CartGroup2';

const Cart2 = (props) => {
    const { name } = props.product;
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>

        </Card>
    )
};

export default Cart2;