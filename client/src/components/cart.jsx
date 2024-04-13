import React,{useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import "./cart.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
const CartItem=(props)=>{
    const Remove = async(id,userid) =>{
        try {
            const response_ = await axios.post('http://localhost:5000/removeCart/', {userid:userid,id: id,
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
                

                
            }
        } catch (e) { console.error(e) }
    
    }
    return(
        <div className="cart-boxs">
        <img src={props.images} className="cart-image"></img>
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
                                  


                </div>
                <div className="cart-sellerinfo">
                    <img  src={props.user_image} className="rounded-circle seller-info-cart"></img>
                    <div>{props.user_name}</div>
                    <div>{props.phoneNumber}</div>

             </div>
             <button className="btn btn-danger remove" onClick={()=>{Remove(props.id,props.userid)}}>Remove</button>

        </div>
    )
}
const Cart = () =>{
    const {state}=useLocation();
    const [products,setProduct] = useState([]);
    const [userdata,setUserdata] = useState();
    const [info,setInfo] = useState({
        products:[],
        userdata:{},
    })
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
                

                const productPromises = data_.data.cart.map(p => fetchProduct(p));
                const products = await Promise.all(productPromises);
                setInfo({
                    products:products,
                    userdata:data_.data
                })
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
        userInfo();
    }, []);
    
    return(
        <div className="cart">
            <Navbar></Navbar>

            <div className="cart-box">
            {info&&info.products.map((info_, index) => (<CartItem userid ={info.userdata.userId}user_name={info.userdata.displayName} phoneNumber={info.userdata.phoneNumber}user_image={info.userdata.image} images={info_.images[0]||"/vendVentures.png"} price={info_.price} location={info_.location} description={info_.description} title={info_.title} id={info_._id}></CartItem>))}


            </div>
        <Footer/>
        </div>
    )
}

export default Cart;