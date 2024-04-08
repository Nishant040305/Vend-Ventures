import React from "react";
import "./product.css";
import Navbar from "./Navbar.jsx";
const Product =()=>{
    return(
        <>
        <Navbar></Navbar>
        <div className="product">
                
      <section>
        <div class="container flex">
          <div class="left">
            <div class="main_image">
              <img src="images/img1.jpg" class="slide"/>
            </div>
            <div class="option flex">
              <img src="images/img1.jpg" onclick="img('images/img1.jpg')"/>
              <img src="images/img2.jpg" onclick="img('images/img2.jpg')"/>
              <img src="images/img3.jpg" onclick="img('images/img3.jpg')"/>
              <img src="images/img4.jpeg" onclick="img('images/img4.jpeg')"/>
              <img src="images/img5.jpg" onclick="img('images/img5.jpg')"/>
              
            </div>
          </div>
          <div class="right">
            
            <h3>Description</h3>
            
            
            <i class="fa-solid fa-share-nodes"></i>
            <i class="fa-regular fa-heart"></i>
            
            
            
            
            <h4> <small>Rs.</small> 95,000</h4>
            <p>Sony a6400 camera </p>
            
            <p>samudrapur,Maharastra,India</p>
            <hr/>
            <div class="profile">
                <div class="seller">
                    <img class="profile circular" src="images/profile.jpeg" alt="" height="60px"/>
                </div>
                <div class="seller">
                    <h5>Pratik Ganvir</h5>
                </div>
                
            </div>
            <button >Chat with seller</button>
            <h5  class="post">Posted in</h5>
            <p>Samudrapur,Maharashtra , India</p>
            <button >Add to Bag</button>
          </div>
        </div>
      </section>
      <footer style={{marginTop: 30}}>
        <div class="footer">
            <div class="footer-column">
                <p class="footer-links-head"><strong>POPULAR LOCATIONS</strong></p>
                <ul>
                    <li class="footer-links">Kolkata</li>
                    <li class="footer-links">Mumbai</li>
                    <li class="footer-links">Chennai</li>
                    <li class="footer-links">Pune</li>
                </ul>
            </div>


            <div class="footer-column">
                <p class="footer-links-head"><strong>TRENDING LOCATIONS</strong></p>
                <ul>
                    <li class="footer-links">Bhubaneshwar</li>
                    <li class="footer-links">Hyderabad</li>
                    <li class="footer-links">Chandigarh</li>
                    <li class="footer-links">Nashik</li>
                </ul>
            </div>

            <div class="footer-column">
                <p class="footer-links-head"><strong>ABOUT US</strong></p>
                <ul>
                    <li class="footer-links">Group</li>
                    <li class="footer-links">Blog</li>
                    <li class="footer-links">Contact Us</li>
                    <li class="footer-links">Business</li>
                    
                </ul>
            </div>


            <div class="footer-column">
                <p class="footer-links-head"><strong>VEND VEINTURS</strong></p>
                <ul>
                    <li class="footer-links">Help</li>
                    
                    <li class="footer-links">Sitemap</li>
                    <li class="footer-links">Terms of Use</li>
                    <li class="footer-links">Privacy Policy</li>
                   
                </ul>
            </div>


            <div class="footer-column footer-column2">
                <p class="footer-links-head"><strong>FOLLOW US</strong></p>
                <div class="social-footer-links" style={{width:600}}>
                    <span class="social-footer-links">
                        <i class="fa-brands fa-facebook"></i>
                    </span>
                    <span class="social-footer-links">
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                    <span class="social-footer-links">
                        <i class="fa-brands fa-youtube"></i>
                    </span>
                    <span class="social-footer-links">
                        <i class="fa-brands fa-square-instagram"></i>
                    </span>
                </div>

               
            </div>
           
        </div>
        <div class="footer-credit-bg">
            <div class="footer-credit">
                <p class="footer-credit-p"><strong class="footer-credit-p">All rights reserved © 2024 VEND VEINTURS</strong></p>
            </div>
        </div>

    </footer>
      
    </div>
    </>
    )
}


export default Product;