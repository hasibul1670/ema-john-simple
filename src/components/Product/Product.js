import React from 'react';
import'./Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
<div className="img">
    <img src={img} alt="" srcset=""/>
</div>


<div className="name"> <h4>{name}</h4>

<br/>
<p>by:{seller}</p>

<p>${price}</p>
<br/>
    <p>only {stock} left in Stock-Order Soon</p>
<button className="btn" onClick={()=>props.addproduct(props.product)}

> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>

    </div>
           
        </div>
    );
};

export default Product;