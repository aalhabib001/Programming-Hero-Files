import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let population = 0;

    for (let i = 0; i < cart.length; i++) {
        population = population + cart[i].population;
    }


    return (
        <div>

            <h3>Country Added: {cart.length}</h3>
            <h4>{population}</h4>
        </div>
    );
};

export default Cart;