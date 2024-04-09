import React from "react";
import "./product.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Product =()=>{
  var dt; // Product Schema is stored here
    const navigate = useNavigate();
    const {productID} = useParams();
    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/productinfo/', {
                params: {
                    id: productID
                },
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
                console.log(data);
                dt = data.data;
                if (dt == null) {
                    navigate("/error");
                }
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
              <img src="images/img1.jpg" className="slide"/>
            </div>
            <div className="option flex">
              <img src="images/img1.jpg" onclick="img('images/img1.jpg')"/>
              <img src="images/img2.jpg" onclick="img('images/img2.jpg')"/>
              <img src="images/img3.jpg" onclick="img('images/img3.jpg')"/>
              <img src="images/img4.jpeg" onclick="img('images/img4.jpeg')"/>
              <img src="images/img5.jpg" onclick="img('images/img5.jpg')"/>
              
            </div>
            <div className="product-description">
                <h3>Description</h3>
            </div>
          </div>
          <div className="right">
            <div className="Dcrrchxaoi">
            <h3 className="product-title">Title</h3>
            <div>
            <i className="fa-solid fa-share-nodes"></i>
            <i className="fa-regular fa-heart"></i>
            </div>
            
            </div>
            
            <h4 className="align-left "> <small className="color-change-product">Rs.</small> 95,000</h4>
            <p className="align-left color-change-product" >&ensp;&ensp;&ensp;&ensp;Sony a6400 camera </p>
            <p className="align-left color-change-product ">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;samudrapur,Maharastra,India</p>
            <hr/>
            <div className="profile">
                <div className="seller">
                    <img className="profile circular" src="images/profile.jpeg" alt="" height="60px"/>
                </div>
                <div className="seller">
                    <h5>Pratik Ganvir</h5>
                </div>
                
            </div>
            <div className="chatSectsnafiXsf">
            <button className="product-chat-bag">Chat with seller</button>
            <h5  className="align-left ">Posted in</h5>
            <br/>
            <div className="color-change-product align-left">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Samudrapur,Maharashtra , India</div>
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