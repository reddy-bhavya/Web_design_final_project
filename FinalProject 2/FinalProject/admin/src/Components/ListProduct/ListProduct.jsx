import React, { useEffect, useState } from "react";
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:3000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const removeProduct = async (id) => { // Fix the function name and parameter
        await fetch('http://localhost:3000/removeproduct', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }) // Pass the id as an object
        })
        await fetchInfo();
    }

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-allproducts">
                <div className="listproduct-format">
                    <div className="listproduct-title">Products</div>
                    <div className="listproduct-title">Title</div>
                    <div className="listproduct-title">Old Price</div>
                    <div className="listproduct-title">New Price</div>
                    <div className="listproduct-title">Category</div>
                    <div className="listproduct-title">Remove</div>
                </div>
                {allproducts.map((product, index) => (
                    <div key={index} className="listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <div className="listproduct-item">{product.name}</div>
                        <div className="listproduct-item">${product.old_price}</div>
                        <div className="listproduct-item">${product.new_price}</div>
                        <div className="listproduct-item">{product.category}</div>
                        <button onClick={() => removeProduct(product.id)} className='listproduct-remove-btn'>
                            <img src={cross_icon} alt="" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListProduct;
