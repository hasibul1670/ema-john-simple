import React, { useState } from 'react';
import fakeData from'../../fakeData';
import'./Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
 
const Shop = () => {
    const first = fakeData.slice(0,10)
  const [product,setproduct]=useState(first);

  const[cart,setCart]=useState([]);

 

const addproduct=(product)=>{
    console.log(Product);
    const newcart=[...cart,product];
    setCart(newcart);
}

    return (
        <div className="shop">
          
<div className="product-con">
    
{
    product.map(pd=><Product 
        addproduct={addproduct}
        product={pd} ></Product>)
}


</div>
<div className="card-con">
   <Cart cart= {cart}></Cart>
    
</div>


        </div>
    );
};

export default Shop;