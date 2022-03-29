import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Cart2 from '../Cart2/Cart2';

const CartGroup2 = () => {

    const products = [

        { id: 1, name: 'laptop', price: 1234 },
        { id: 2, name: 'laptop', price: 3456 },
        { id: 17, name: 'dfghd', price: 6432 },


    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Cart2 key={product.id} product={product} ></Cart2>)
                }

            </CardGroup>
        </div>
    );
};

export default CartGroup2;