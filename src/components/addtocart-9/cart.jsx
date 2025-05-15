import React, { useState } from 'react' 
import "./addtocart.css"
import { Link } from 'react-router-dom';

function Cart() {
   const [products, setProducts] = useState( JSON.parse(localStorage.getItem("ecart")) || []);

   const handlerem = (val, ind) => {
     const newarr = [...products];
     newarr.splice(ind, 1);
     setProducts(newarr);
     localStorage.setItem("ecart", JSON.stringify(newarr));
     alert(val.title + " is removed from cart");
   }

   const totaldata = products.reduce((acc, val) => {
     return acc + Number(val.price);
   }, 0);

   return (
     <div className="cart-container">
       <h1>Total Cart Items</h1>

       <div className="total-info">
         <div className="total-value">Total Value: ₹{totaldata}</div>
         <div className="total-quantity">Total Products: {products.length}</div>
       </div>
       
       <div className="products-grid">
         {products.length <= 0 ? (
           <h1>Your cart is empty</h1>
         ) : (
           products.map((val, ind) => (
             <div key={ind} className="product-card">
               <img src={val.image} alt={val.title} />
               <h3>{val.title}</h3>
               <p><strong>ID:</strong> {val.id}</p>
               <p><strong>Price:</strong> ₹{val.price}</p>
               <p><strong>Category:</strong> {val.category}</p>
               <div className="button-container">
                 <button onClick={() => handlerem(val, ind)} className="del-btn">Delete</button>
                 <button className="show-more-btn">
                   <Link to={`/product/${val.id}`} className="link-style">Show More</Link>
                 </button>
               </div>
             </div>
           ))
         )}
       </div>
     </div>
   );
}

export default Cart;
