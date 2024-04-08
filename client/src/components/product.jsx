import React from "react";
import "./product.css";
import Navbar from "./Navbar.jsx";
const Product =()=>{
    return(
        <>
        <Navbar></Navbar>
        <div className="product">
                
      <section>
        <div className="container flex">
          <div className="left">
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
          </div>
          <div className="right">
            
            <h3>Description</h3>
            
            
            <i className="fa-solid fa-share-nodes"></i>
            <i className="fa-regular fa-heart"></i>
            
            
            
            
            <h4> <small>Rs.</small> 95,000</h4>
            <p>Sony a6400 camera </p>
            
            <p>samudrapur,Maharastra,India</p>
            <hr/>
            <div className="profile">
                <div className="seller">
                    <img className="profile circular" src="images/profile.jpeg" alt="" height="60px"/>
                </div>
                <div className="seller">
                    <h5>Pratik Ganvir</h5>
                </div>
                
            </div>
            <button >Chat with seller</button>
            <h5  className="post">Posted in</h5>
            <p>Samudrapur,Maharashtra , India</p>
            <button >Add to Bag</button>
          </div>
        </div>
      </section>
      <footer style={{marginTop: 30}}>
        <div className="footer">
            <div className="footer-column">
                <p className="footer-links-head"><strong>POPULAR LOCATIONS</strong></p>
                <ul>
                    <li className="footer-links">Kolkata</li>
                    <li className="footer-links">Mumbai</li>
                    <li className="footer-links">Chennai</li>
                    <li className="footer-links">Pune</li>
                </ul>
            </div>


            <div className="footer-column">
                <p className="footer-links-head"><strong>TRENDING LOCATIONS</strong></p>
                <ul>
                    <li className="footer-links">Bhubaneshwar</li>
                    <li className="footer-links">Hyderabad</li>
                    <li className="footer-links">Chandigarh</li>
                    <li className="footer-links">Nashik</li>
                </ul>
            </div>

            <div className="footer-column">
                <p className="footer-links-head"><strong>ABOUT US</strong></p>
                <ul>
                    <li className="footer-links">Group</li>
                    <li className="footer-links">Blog</li>
                    <li className="footer-links">Contact Us</li>
                    <li className="footer-links">Business</li>
                    
                </ul>
            </div>


            <div className="footer-column">
                <p className="footer-links-head"><strong>VEND VEINTURS</strong></p>
                <ul>
                    <li className="footer-links">Help</li>
                    
                    <li className="footer-links">Sitemap</li>
                    <li className="footer-links">Terms of Use</li>
                    <li className="footer-links">Privacy Policy</li>
                   
                </ul>
            </div>


            <div className="footer-column footer-column2">
                <p className="footer-links-head"><strong>FOLLOW US</strong></p>
                <div className="social-footer-links" style={{width:600}}>
                    <span className="social-footer-links">
                        <i className="fa-brands fa-facebook"></i>
                    </span>
                    <span className="social-footer-links">
                        <i className="fa-brands fa-twitter"></i>
                    </span>
                    <span className="social-footer-links">
                        <i className="fa-brands fa-youtube"></i>
                    </span>
                    <span className="social-footer-links">
                        <i className="fa-brands fa-square-instagram"></i>
                    </span>
                </div>

               
            </div>
           
        </div>
        <div className="footer-credit-bg">
            <div className="footer-credit">
                <p className="footer-credit-p"><strong className="footer-credit-p">All rights reserved © 2024 VEND VEINTURS</strong></p>
            </div>
        </div>

    </footer>
      
    </div>
    </>
    )
}


export default Product;