// import React, { useEffect, useState } from 'react'
// import './PurchaseSummary.css'

// const PurchaseSummary = () => {
  
//     const [purhcaseOrderSummary,setPurchaseOrderSummary] = useState([]);

//     const fetchInfo = async ()=> {
//         const params = new URLSearchParams(window.location.search);
//         const poId = params.get("id"); // paramValue will be "123"
//         console.log("poId : ", poId);
//         await fetch(`http://localhost:3000/purchaseorder?id=${poId}`) 
//         .then((res)=>res.json())
//         .then((data)=>{setPurchaseOrderSummary(data)}); 
//     }

//     useEffect(()=>{
//         fetchInfo();
//     },[])


//   return (
//     <div>
//         <p>Success</p>

//         <div className='list-product'>
//             <h1> Purchase Order Summary</h1>
//             <div className="listproduct-format-main">
//                 <p>Purchase Order</p>
//                 <p>Product Name</p>
//                 <p>Product Price</p>
//                 <p>Quantity</p>
//             </div>
//             <div className="listproduct-allproducts">
//                 <hr />
//                 {purhcaseOrderSummary.map((po,index)=>{
//                     return <>
//                     <div  key={index} className="listproduct-format-main listproduct-format">
//                             {/* <img src={product.image} alt="" className="listproduct-product-icon" /> */}
//                             <p>{po.id}</p>
//                             <p>{po.product_name}</p>
//                             <p>${po.product_price}</p>
//                             <p>{po.ordered_quantity}</p>
                            
//                     </div>
//                     <hr/>
//                     </>

//                 })}
//             </div>

//         </div>


//     </div>
//   )
// }

// export default PurchaseSummary

// import React, { useEffect, useState } from 'react';
// import './PurchaseSummary.css';

// const PurchaseSummary = () => {
  
//     const [purchaseOrderSummary, setPurchaseOrderSummary] = useState([]);

//     const fetchInfo = async () => {
//         const params = new URLSearchParams(window.location.search);
//         const poId = params.get("id");
//         console.log("poId : ", poId);
//         await fetch(`http://localhost:3000/purchaseorder?id=${poId}`)
//             .then((res) => res.json())
//             .then((data) => setPurchaseOrderSummary(data)); 
//     }

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     return (
//         <div>
//             <p>Success</p>

//             <div className='list-product'>
//                 <h1>Purchase Order Summary</h1>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th scope="col">Purchase Order</th>
//                             <th scope="col">Product Name</th>
//                             <th scope="col">Product Price</th>
//                             <th scope="col">Quantity</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {purchaseOrderSummary.map((po, index) => (
//                             <tr key={index}>
//                                 <td>{po.id}</td>
//                                 <td>{po.product_name}</td>
//                                 <td>${po.product_price}</td>
//                                 <td>{po.ordered_quantity}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default PurchaseSummary;

import React, { useContext, useEffect, useState } from 'react';
import './PurchaseSummary.css';
import { ShopContext } from '../../Context/ShopContext';

const PurchaseSummary = () => {
  
    const [purchaseOrderSummary, setPurchaseOrderSummary] = useState([]);
    const {clearCart} = useContext(ShopContext);
    clearCart();

    const fetchInfo = async () => {
        const params = new URLSearchParams(window.location.search);
        const poId = params.get("id");
        console.log("poId : ", poId);
        await fetch(`http://localhost:3000/purchaseorder?id=${poId}`)
            .then((res) => res.json())
            .then((data) => setPurchaseOrderSummary(data)); 
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className='purchase-order'>
            <div className='list-product'>
                <h3>Order Processed Successfully</h3>
                <hr/>
                <h1>Purchase Order Summary</h1>
                {/* <div className="table-responsive"> */}
                    <table className="table table-striped table-centered table-responsive custom-table">
                        <thead>
                            <tr>
                                <th scope="col">Purchase Order</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseOrderSummary.map((po, index) => (
                                <tr key={index}>
                                    <td>{po.id}</td>
                                    <td>
                                        {po.product_name.map((productName, index) => (
                                            <div key={index}>{productName}</div>
                                        ))}
                                    </td>
                                    <td>
                                        {po.product_price.map((productPrice, index) => (
                                            <div key={index}>${productPrice}</div>
                                        ))}
                                    </td>
                                    <td>
                                        {po.ordered_quantity.map((quantity, index) => (
                                            <div key={index}>{quantity}</div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                {/* </div> */}
            </div>
        </div>
    );
}

export default PurchaseSummary;

