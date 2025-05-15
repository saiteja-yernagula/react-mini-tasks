import React, { useEffect, useState } from 'react';
import Spincomp from '../filteredproducts-3/spincomp';
import axios from 'axios';
import "./addtocart.css";
import { Link } from 'react-router-dom';

function Addtocart() {
  const [allProducts, setAllProducts] = useState([]);  
  const [products, setProducts] = useState([]);       
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("ecart") || "[]"));

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setAllProducts(response.data);  // Save full list
        setProducts(response.data);     // Display list
      });
  }

  const handleCart = (val) => {
    const newArr = [...cart, val];
    setCart(newArr);
    alert(val.title + " added to cart");
    localStorage.setItem("ecart", JSON.stringify(newArr));
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    const newData = allProducts.filter((val) =>
      val.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(newData);
  };

  return (
    <div className="filtered-container">
      <h1>Ecart</h1>
     <form className="search-form">
  <input
    type="search"
    onChange={handleSearch}
    placeholder="Search your fav"
    className="search-input"
  />
</form>
      <div>
        <button>
          <Link to="/cart">View Cart</Link>
        </button>
      </div>

      <div className="products-grid">
        {products.length <= 0 ? (
          <Spincomp />
        ) : (
          products.map((val) => (
            <div key={val.id} className="product-card">
              <img src={val.image} alt={val.title} />
              <h3>{val.title}</h3>
              <p><strong>ID:</strong> {val.id}</p>
              <p><strong>Price:</strong> ₹{val.price}</p>
              <p><strong>Category:</strong> {val.category}</p>
              <div>
                <button onClick={() => handleCart(val)}>Add to cart</button>
                <button>
                  <Link to={`/product/${val.id}`}>
                    View more
                  </Link>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Addtocart;
