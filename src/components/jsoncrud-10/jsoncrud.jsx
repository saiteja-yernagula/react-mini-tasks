import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./jsoncrud.css";

function Jsoncrud() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/data");
        setData(response.data);
    };

    const handleadd = (event) => {
        event.preventDefault();
        const objdata = {
            id: event.target[0].value,
            name: event.target[1].value,
            category: event.target[2].value,
            price: event.target[3].value,
            image: event.target[4].value,
            description: event.target[5].value
        };
        axios.post("http://localhost:3001/data", objdata);
        fetchData();
    };

    const handleupd = (event) => {
        event.preventDefault();
        const id = event.target[0].value;
        const objdata = {
            id: id,
            name: event.target[1].value,
            category: event.target[2].value,
            price: event.target[3].value,
            image: event.target[4].value,
            description: event.target[5].value
        };
        axios.patch(`http://localhost:3001/data/${id}`, objdata);
        fetchData();
    };

    const handledelete = (event) => {
        event.preventDefault();
        const id = event.target[0].value;
        axios.delete(`http://localhost:3001/data/${id}`);
        fetchData();
    };

    return (
        <div className="jsoncrud-container">
            <h1 className="title">Capucino</h1>
            <div className="products-wrapper">
                {data.map((val, index) => (
                    <div className="product-card fade-in" key={index}>
                        <img src={val.image} alt={val.name} className="product-img" />
                        <h2>{val.name}</h2>
                        <p><strong>ID:</strong> {val.id}</p>
                        <p><strong>Category:</strong> {val.category}</p>
                        <p><strong>Price:</strong> ₹{val.price}</p>
                        <p>{val.description}</p>
                    </div>
                ))}
            </div>

            <h1 className="section-title">Product Management</h1>

            <div className="form-section">
                <h2>Add New Product</h2>
                <form onSubmit={handleadd} className="crud-form">
                    <input type="text" placeholder='Enter ID' />
                    <input type="text" placeholder='Enter Name' />
                    <input type="text" placeholder='Enter Category' />
                    <input type="text" placeholder='Enter Price' />
                    <input type="url" placeholder='Enter Image URL' />
                    <input type="text" placeholder='Enter Description' />
                    <button type="submit">Add Product</button>
                </form>
            </div>

            <div className="form-section">
                <h2>Update Product</h2>
                <form onSubmit={handleupd} className="crud-form">
                    <input type="text" placeholder='Enter ID' />
                    <input type="text" placeholder='Enter Name' />
                    <input type="text" placeholder='Enter Category' />
                    <input type="text" placeholder='Enter Price' />
                    <input type="url" placeholder='Enter Image URL' />
                    <input type="text" placeholder='Enter Description' />
                    <button type="submit">Update Product</button>
                </form>
            </div>

            <div className="form-section">
                <h2>Delete Product</h2>
                <form onSubmit={handledelete} className="crud-form">
                    <input type="text" placeholder='Enter ID to Delete' />
                    <button type="submit" className="delete-btn">Delete Item</button>
                </form>
            </div>
        </div>
    );
}

export default Jsoncrud;
