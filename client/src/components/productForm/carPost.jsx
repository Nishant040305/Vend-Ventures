import React from "react";
import './carPost.css';
const CarPost=()=>{
    return(
        <div className="carpost">
            <form action="#" method="POST" enctype="multipart/form-data">
       <h1 class="heading">POST YOUR AD</h1>
       <div class="container">
        <div class="header">
            <h2 class="head2">SELECTED CATEGORY</h2>
            <span class="cat">Cars/Cars<a href="#"><b>Change</b></a></span>
            <span class="cat" id="link"></span>
        </div>
        <div class="content">
            <h2 class="head2">INCLUDE SOME DETAILS</h2>
            <div class="labels">
                <label for="brand"  required>Brand*</label>
                <select name="brand" id="brand">
                    <option value=""></option>
                    <optgroup label="Popular Brand">
                        <option value="Maruti Suzuki">Maruti Suzuki</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Tata">Tata</option>
                        <option value="Mahindra">Mahindra</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                    </optgroup>
                    <optgroup label="All Brand">
                        <option value="BYD">BYD</option>
                        <option value="Audi">Audi</option>
                        <option value="Ambassador">Ambassador</option>
                        <option value="Ashok">Ashok</option>
                        <option value="Ashok Leyland">Ashok Leyland</option>
                        <option value="Aston">Aston</option>
                        <option value="Aston Martin">Aston Martin</option>
                        <option value="Bajaj">Bajaj</option>
                        <option value="Bentley">Bentley</option>
                        <option value="Citroen">Citroen</option>
                        <option value="BMW">BMW</option>
                    </optgroup>
                </select>
            </div>
            <div class="labels">
                <label for="year" >Year*</label>
                <input type="number" name="year" id="year" required></input>
            </div>
            <div class="labels">
                <label for="fuel">Fuel*</label>
                <select name="fuel" id="fuel" required>
                    <option value=""></option>
                    <option value="CNG&Hybrids">CNG & Hybrids</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="LPG">LPG</option>
                    <option value="petrol">Petrol</option>
                </select>
            </div>
            <div class="labels">
                <label for="transmission">Transmission*</label>
                <select name="transmission" id="transmission" required>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                </select>
            </div>
            <div class="labels">
                <label for="km">KM driven*</label>
                <input type="text" name="km" id="km" required></input>
            </div>
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
export default CarPost;