import React from 'react';

const Cart = (props) => {
    const cart=props.cart;

    const total = cart.reduce((total,prd)=>total + prd.price,0);

    let ship =0;
    if(total>35){
        ship=0;
    }
    else if(total>15){
        ship=4.99;
    }
    else if(total>0){
        ship=12.59
    }

    const number = num=>{
        const p = num.toFixed(2);
        return Number(p);
    }

    const tax = (total/10);
    return (
        <div>
                <h4>Order Summery</h4>
    <p>Items Ordered: {cart.length}</p>
    <p>Product Price:{number(total)}</p>
    <p>Shipping Cost : {number (ship)}</p>
    <p>Tax+Vat: {number(tax)}</p>
    <p>Total Price: {number(total+ship + tax)}</p>
    
        </div>
    );
};

export default Cart;