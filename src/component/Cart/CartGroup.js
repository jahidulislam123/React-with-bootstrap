import React from 'react';
import Cart from '../CartG/Cart';




const CartGroup = () => {
    const products = [

        { id: 1, name: 'laptop', price: 1234 },
        { id: 2, name: 'laptop', price: 3456 },
        { id: 17, name: 'dfghd', price: 6432 },
        { id: 15, name: 'dsfsdf', price: 44556 },
        { id: 5, name: 'sdf', price: 123334 },

    ]
    return (
        <div>
            <div className="card">
                {
                    products.map(product => <Cart key={product.id} product={product} ></Cart>)
                }

            </div>

        </div>
    );
};

export default CartGroup;