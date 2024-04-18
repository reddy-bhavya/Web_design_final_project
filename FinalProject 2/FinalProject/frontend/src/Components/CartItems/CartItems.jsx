import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
    let buildCartObject = [];

    function buildCartItem(){
        console.log("all_product : ", all_product);
        console.log("typeof all_product : ", typeof all_product);  // array of Objects
        console.log("all_product[0] : ", all_product[0]);
        console.log("type of all_product[0]: ", typeof all_product[0]);
        console.log("id of all_product[0]: ", all_product[0].id);


        for (const obj of all_product){
            let tempObj = {}
            if(cartItems[obj.id] > 0){
                console.log("id of the item : ", obj.id);
                console.log("Number of items : ", cartItems[obj.id]);
                // tempObj._id = obj._id;
                tempObj.id = obj.id;
                tempObj.quantity = cartItems[obj.id];
                buildCartObject.push(tempObj)
            }
        }
        console.log("buildCartObject : ",buildCartObject);
    
        // console.log("cartItems : " , cartItems);
        // console.log("typeof cartItems", typeof cartItems);

    }

    function initiatePayment() {
        console.log("Build cart initiated");
        buildCartItem();

        console.log("Payment Initiated");
        fetch('http://localhost:3000/create-checkout-session',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // items:[
                //     {id : 1, quantity : 3},
                //     {id : 2, quantity : 1}
                // ],
                items : buildCartObject,
            }),
        })
        .then((res) => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({url}) => {
            console.log("url name : ", url)
            window.location = url
        }).catch(e => {
            console.error(e)
        })
    }

    

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0)
            {
                return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt=""  className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div> 
                // )
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />  
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={initiatePayment} >PROCEED TO CHECKOUT</button>
            </div>
            {/* <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button >Submit</button>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default CartItems