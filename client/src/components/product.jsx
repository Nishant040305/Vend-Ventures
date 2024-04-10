import React from "react";
import "./product.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Product =()=>{
    const[dt,setDt] = useState();
    const[seller,setSeller] = useState();
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
        
        try {
            const response_ = await axios.post('http://localhost:5000/userinfo/', {id: `${dt.userId}`,
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
                setSeller(data_.data);
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
            if (response.status !== 200) {
                throw new Error('Failed to fetch data');
            }
            const data = response.data;
            if (data.error) {
                throw new Error(data.error);
            } else {
                setDt(data.data);

            }
        } catch (e) { console.error(e) }
        console.log("ok",dt);
        if(dt!=null)
 userInfo();
  
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    console.log(seller);
    useEffect(() => {
        console.log(seller);
    }, [seller]);
    

    return(
        <>
        <Navbar></Navbar>
        <div className="product">
                

      <section >
        <div className="container-productDetails container flex">
          <div className="left n">
            <div className="main_image">
              <img src="/images/img1.jpg" className="slide"/>
            </div>
            <div className="option flex">
            <img src="/images/img1.jpg" onClick={() => img('/images/img1.jpg')}/>
            <img src="/images/img2.jpg" onClick={() => img('/images/img2.jpg')}/>
            <img src="/images/img3.jpg" onClick={() => img('/images/img3.jpg')}/>
            <img src="/images/img4.jpeg" onClick={() => img('/images/img4.jpeg')}/>
            <img src="/images/img5.jpg" onClick={() => img('/images/img5.jpg')}/>


            </div>
            <div className="product-description">
                <h3>Description</h3>
                {dt&&<div>
                {Object.keys(dt.description).map((key, index) => (
                <div  className="description-data" key={index}>
                    <strong>{key}:</strong> {dt.description[key]}
                </div>
            ))}
           
                </div>}
            </div>
          </div>
          <div className="right">
            <div className="Dcrrchxaoi">
            <h3 className="product-title">{dt&&dt.title}</h3>
            <div>
            <i className="fa-solid fa-share-nodes"></i>
            <i className="fa-regular fa-heart"></i>
            </div>
            
            </div>
            
            <h4 className="align-left "> <small className="color-change-product">Rs.</small>{dt&&dt.price}</h4>
            <p className="align-left color-change-product" >{dt&&dt.description.description}</p>
            <p className="align-left color-change-product ">{dt&&dt.location}</p>
            <hr/>
            <div className="profile">
                <div className="seller">
                    <img className="profile circular" src={seller&&seller.image} alt="" height="60px"/>
                </div>
                <div className="seller">
                    <h5>{seller&&seller.displayName}</h5>
                </div>
                
            </div>
            <div className="chatSectsnafiXsf">
            <button className="product-chat-bag">Chat with seller</button>
            <h5  className="align-left ">Posted in</h5>
            <br/>
            <div className="color-change-product align-left" style={{marginLeft:50}}>{dt&&dt.location}</div>
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