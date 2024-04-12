import React from "react";
import {useLocation} from "react-router-dom";
import "./cart.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const CartItem=()=>{
    return(
        <div className="cart-boxs">
        <img src="/images/img1.jpg" className="cart-image"></img>
                <div className="cart-data">
                    <div className="cart-title">
                       <strong> Sony A 10 cammera</strong>
                    </div>
                    <div className="cart-price-data">
                    <h4 className="cart-price"> <small className="color-change-product">Rs.</small>95000</h4>
                    </div>
                    <div className="cart-description">
                        
                        <div className="cart-datapoin">brand:ssfdk</div>
                        <div className="cart-datapoin">description:dfsjiowekfd</div>
                    </div>       
                                  
                    <button className="btn btn-danger remove">Remove</button>


                </div>
                <div className="cart-sellerinfo">
                    <div>Seller information</div>
                    <img  src="/images/img1.jpg" className="rounded-circle seller-info-cart"></img>
                    <div>Nishant Mohan</div>
                    <div>+91 9651602279</div>
             </div>
        </div>
    )
}
const Cart = () =>{
    const {state}=useLocation();
    
    return(
        <div className="cart">
            <Navbar></Navbar>

            <div className="cart-box">
                <CartItem></CartItem>
                <CartItem></CartItem>

            </div>

        </div>
    )
}

export default Cart;