import React from "react";
import "./product.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Product =()=>{
    // const[dt,setDt] = useState();
    var dt2;
    var seller2;
    const[info,setInfo] = useState({
        dt:"",
        seller:""
});
    const navigate = useNavigate();
    const {productID} = useParams();
    function img(anything) {
        document.querySelector('.slide').src = anything;
      }
  
    
      function change(change) {
        const line = document.querySelector('.home');
        line.style.background = change;
      }
    const userInfo = async()=>{
        // console.log("USERINFO")
        try {
            const response_ = await axios.post('http://localhost:5000/userinfo/', {id: `${dt2.userId}`,
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (response_.status !== 200) {
                throw new Error('Failed to fetch data');
            }
            const data_ = response_.data;
            // console.log(data_)
            if (data_.error) {
                throw new Error(data_.error);
            } else {
                seller2 = data_.data;
                setInfo({
                    dt:dt2,
                    seller:seller2
                })
                // console.log(dt)
  
            }
        } catch (e) { console.error(e) }
    }
    const fetchProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/productinfo/', {id: `${productID}`,
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
                dt2 = data.data;
        if(dt2!=null) userInfo();
            }
        } catch (e) { console.error(e) }
        
  
    }
    useEffect(() => {
        fetchProduct()
    }, [])


    return(
        <>
        <Navbar></Navbar>
        <div className="product">
                

      <section >
        <div className="container-productDetails container flex">
          <div className="left n">
            <div className="main_image">

              {info.dt&&<img src={info.dt.images[0]} className="slide"/>}
            </div>
            <div className="option flex">
            {info.dt&&info.dt.images.map((info, index) => (<img src={info} onClick={()=>img(info)}></img>))}

            </div>
            <div className="product-Description">
                <h3>Description</h3>
                {info.dt&&<div>
                {Object.keys(info.dt.Description).map((key, index) => (
                <div  className="Description-data" key={index}>
                    <strong>{key}:</strong> {info.dt.Description[key]}
                </div>
            ))}
           
                </div>}

            </div>
          </div>
          <div className="right">
            <div className="Dcrrchxaoi">
            <h3 className="product-title">{info.dt&&info.dt.title}</h3>
            <div>
            <i className="fa-solid fa-share-nodes"></i>
            <i className="fa-regular fa-heart"></i>
            </div>
            
            </div>
            
            <h4 className="align-left "> <small className="color-change-product">Rs.</small>{info.dt&&info.dt.price}</h4>
            <p className="align-left color-change-product" >{info.dt&&info.dt.Description.Description}</p>
            <p className="align-left color-change-product ">{info.dt&&info.dt.location}</p>
            <hr/>
            <div className="profile">
                <div className="seller">
                    <img id="sellerImg" className="profile circular" src={info.seller&&info.seller.image} alt="" height="60px"/>
                </div>
                <div className="seller">
                    <h5 id="sellerName">{info.seller&&info.seller.displayName}</h5>
                </div>
                
            </div>
            <div className="chatSectsnafiXsf">
            <button className="product-chat-bag">Chat with seller</button>
            <h5  className="align-left " style={{marginTop:4}}>Posted in</h5>
            <br/>
            <div className="color-change-product align-left" style={{marginLeft:50}}>{info.dt&&info.dt.location}</div>
            <button className="product-chat-bag">Add to Bag</button>
            </div>
            
          </div>
        </div>
      </section>
        
    </div>
    <Footer>
    </Footer>
    </>
    )
}


export default Product;