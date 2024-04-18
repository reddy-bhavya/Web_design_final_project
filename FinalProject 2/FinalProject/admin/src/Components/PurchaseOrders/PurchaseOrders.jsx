import React, { useEffect, useState } from "react";
import cross_icon from '../../assets/cross_icon.png';

const PurchaseOrders = () => {
    const [purchaseOrders, setPurchaseOrders] = useState([]);

    // Function to fetch all purchase orders from the backend
    const fetchPurchaseOrders = async () => {
        try {
            const response = await fetch('http://localhost:3000/purchaseorders');
            if (response.ok) {
                const data = await response.json();
                setPurchaseOrders(data);
            } else {
                console.error('Failed to fetch purchase orders:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching purchase orders:', error.message);
        }
    };

    // Fetch all purchase orders on component mount
    useEffect(() => {
        fetchPurchaseOrders();
    }, []);

    return (
        <div className='list-product'>
            <h1>All Purchase Orders</h1>
            <div className="listproduct-allproducts">
                <div className="listproduct-format">
                    <div className="listproduct-title">Order ID</div>
                    <div className="listproduct-title">Customer Name</div>
                    <div className="listproduct-title">Product</div>
                    <div className="listproduct-title">Price</div>
                    <div className="listproduct-title">Quantity</div>
                </div>
                {purchaseOrders.map((order, index) => (
                    <div key={index} className="listproduct-format">
                        <div className="listproduct-item">{order.id}</div>
                        <div className="listproduct-item">{order.customer_firstname} {order.customer_lastname}</div>
                        <div className="listproduct-item">
                            {order.product_name.map((productName, index) => (
                                <div key={index}>{productName}</div>
                            ))}
                        </div>
                        <div className="listproduct-item">
                            {order.product_price.map((price, index) => (
                                <div key={index}>${price}</div>
                            ))}
                        </div>
                        <div className="listproduct-item">
                            {order.ordered_quantity.map((quantity, index) => (
                                <div key={index}>{quantity}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchaseOrders;
