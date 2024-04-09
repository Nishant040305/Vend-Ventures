import React from "react";
import './electronics.css';
const Electronics=()=>{
    return(
        <div className="electronics">
            <form action="#" method="POST" enctype="multipart/form-data">
       <h1 class="heading">POST YOUR AD</h1>
       <div class="container">
        <div class="header">
            <h2 class="head2">SELECTED CATEGORY</h2>
            <span class="cat">Electronics & Appliances/TVs,Video-Audio<a href="#"><b>Change</b></a></span>
            <span class="cat"></span>
        </div>
        <div class="content">
            <h2 class="head2">INCLUDE SOME DETAILS</h2>
           
            <div class="labels">
                <label for="title">Ad title*</label>
                <input type="text" name="title" id="title" placeholder="Mention the key features of your item" required>
            </input></div>
            <div class="labels">
                <label for="description">Description</label>
                <textarea name="description" id="description" placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
            </div>
            <div class="labels">
                <h2 class="head2">SET A PRICE</h2>
                <label for="price">Price*</label>
                <input type="text" name="price" id="price" placeholder="In rupees" required></input>
            </div>
            <div class="labels">
                <h2 class="head2">UPLOAD PHOTOS</h2>
                <input type="file" name="photo1" accept="image/*" required></input>
            </div>
            <div class="labels">
                <h2 class="head2">CONFIRM YOUR LOCATION</h2>
                <label for="location">Location*</label>
                <input type="text" name="location" id="location" required></input>
            </div>
            <div class="labels">
                <h2 class="head2">REVIEW YOUR DETAILS</h2>
                <label for="name">Name</label>
                <input type="text" name="name" id="name"></input>
            </div>
            <div class="labels">
                <label for="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone"></input>
            </div>
                
            
            <div class="submit-btn">
                <button type="submit">Submit Ad</button>
            </div>
        </div>
       </div>
    </form>
        </div>
    )
}
export default Electronics;