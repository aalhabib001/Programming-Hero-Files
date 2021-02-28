import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;

    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }    
    
    const formatNumber = (number) => {
        return Number(number.toFixed(2));
    }

    const tax = formatNumber(total/10);
    const grandTotal = formatNumber(total + shipping + tax);



    console.log(total);

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Total Product cost: {total}</small></p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;