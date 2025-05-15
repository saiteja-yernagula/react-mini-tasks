import React, { Component } from 'react';
import Spincomp from './spincomp';
import "./filteredcomp.css"
class Filteredcomp extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      originalProducts: [],
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data,
          originalProducts: data,
        })
      );
  }

  handleAsc = () => {
    const sorted = [...this.state.products].sort((a, b) => a.price - b.price);
    this.setState({ products: sorted });
  };

  handleDec = () => {
    const sorted = [...this.state.products].sort((a, b) => b.price - a.price);
    this.setState({ products: sorted });
  };

  handleCategory = (cat) => {
    const filtered = this.state.originalProducts.filter((val) => val.category === cat);
    this.setState({ products: filtered });
  }

  handleAll=()=>{
    this.setState({products:this.state.originalProducts})
  }

  render() {
    return (
      <div className="filtered-container">
  <div className="button-group">
    <button onClick={this.handleAll}>All Products</button>
    <button onClick={this.handleDec}>Sort ↑</button>
    <button onClick={this.handleAsc}>Sort ↓</button>
    <button onClick={() => this.handleCategory("men's clothing")}>Men's Clothing</button>
    <button onClick={() => this.handleCategory("women's clothing")}>Women's Clothing</button>
    <button onClick={() => this.handleCategory("jewelery")}>Jewelry</button>
    <button onClick={() => this.handleCategory("electronics")}>Electronics</button>
  </div>

  <div className="products-grid">
    {this.state.products.length <= 0 ? (
      <Spincomp />
    ) : (
      this.state.products.map((val) => (
        <div key={val.id} className="product-card">
          <img src={val.image} alt={val.title} />
          <h3>{val.title}</h3>
          <p><strong>ID:</strong> {val.id}</p>
          <p><strong>Price:</strong> ₹{val.price}</p>
          <p><strong>Category:</strong> {val.category}</p>
        </div>
      ))
    )}
  </div>
</div>

    );
  }
}

export default Filteredcomp;
