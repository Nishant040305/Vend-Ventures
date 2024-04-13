import React,{useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import "./cart.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
const CartItem=(props)=>{
    
    return(
        <div className="cart-boxs">
        <img src={props.image} className="cart-image"></img>
                <div className="cart-data">
                    <div className="cart-title">
                       <strong> {props.title}</strong>
                    </div>
                    <div className="cart-price-data">
                    <h4 className="cart-price"> <small className="color-change-product">Rs.</small>{props.price}</h4>
                    </div>
                    <div className="cart-description">
                        
                        {props.description&&<div>{Object.keys(props.description).map((key, index) => (
                                            <div  className="cart-decription" key={index}>
                                                <strong>{key}:</strong> {props.description[key]}
                                            </div>
                                            ))}
            
                                        </div>}
                    </div>       
                                  
                    <button className="btn btn-danger remove">Remove</button>


                </div>
                <div className="cart-sellerinfo">
                    <div>Seller information</div>
                    <img  src="/images/img1.jpg" className="rounded-circle seller-info-cart"></img>
                    <div>Nishant Mohan</div>
                    <div>{props.phoneNumber}</div>
             </div>
        </div>
    )
}
const Cart = () =>{
    const {state}=useLocation();
    const [products,setProduct] = useState([]);
    const [userdata,setUserdata] = useState();
    const varu = [];
    const userInfo = async()=>{
        try {
            const response_ = await axios.post('http://localhost:5000/userinfo/', {id: `${state.userId}`,
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (response_.status !== 200) {
                throw new Error('Failed to fetch data');
            }
            const data_ = response_.data;
            if (data_.error) {
                throw new Error(data_.error);
            } else {
                setUserdata(data_.data);
                const productPromises = data_.data.map(p => fetchProduct(p));
                const products = await Promise.all(productPromises);
                setProduct(products);
            }
        } catch (e) { console.error(e) }
    }
    
    useEffect(() => {
        userInfo();
    }, []);
    
    const fetchProduct = async (vari) => {
        try {
            const response = await axios.post('http://localhost:5000/productinfo/', {id: `${vari}`,
                headers: {
                    'Accept': 'application/json',
                }
            });
            // console.log(response.data.data)
            if (response.status !== 200) {
                throw new Error('Failed to fetch data');
            }
            const data = response.data;
            if (data.error) {
                throw new Error(data.error);
            } else {
                return data.data;
            }
        } catch (e) { console.error(e) }
        
  
    }
    useEffect(() => {
        const fetchData = async () => {
            await userInfo();
            console.log(userdata);
            const productPromises = userdata&&userdata.map(p => fetchProduct(p));
            const products = await Promise.all(productPromises);
            setProduct(products);
        };
        fetchData();
    }, []);
    
    return(
        <div className="cart">
            <Navbar></Navbar>

            <div className="cart-box">
            {products&&products.map((info, index) => (<CartItem images={info.images[0] || "vendVentures.png"} prize={info.price} location={info.location} description={info.description.description} title={info.title} id={info._id}></CartItem>))}


            </div>

        </div>
    )
}

export default Cart;