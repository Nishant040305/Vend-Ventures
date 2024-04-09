import React from "react";
import "./mainpage.css";
import Navbar from "./Navbar.jsx";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer.jsx";
import axios from "axios";

const Card=(props)=>{ 
    const navigate = useNavigate();
    async function onCardClick() {
        try {
            const response = await axios.get("http://localhost:5000/login/sucess",{withCredentials:true});
            if (!response.data.user) {
                document.getElementById("loginBtn").click();
            } else {
                navigate(`/product/${props.id}`);
            }
        } catch (err) {
            console.error(err);
        }
    }
    const likeDislike=()=>{
        console.log(document.getElementById('heart').src)
        if(document.getElementById('heart').src==="http://localhost:3000/heart-png-38780.png"){
            document.getElementById('heart').src="heart.png";

        }
        else{
            document.getElementById('heart').src="heart-png-38780.png";
        }

    }
    return(
        <div className="mainpage-cards card" onClick={async () => await onCardClick()}>
            <img className="card-img-top" alt="..."src="vendVentures.png"></img>
            <div className="card-body">
            <div className="card-title"><div style={{fontWeight:700, fontSize:25}}>Brain</div><img class="heart" id="heart" src="heart.png" onClick={(e)=>{likeDislike()}}></img></div>
            
            
            <div className="cards-discription card-text">
                brain is something which our profs 
            </div>
            <div className="cards-prize container">
                <img src="rupee.png"></img>{props.prize}
            </div>
            </div>
        </div>
    )
}
const Mainpage=()=>{

    return(
        <div className="mainpage">
            <Navbar></Navbar>
            <div className="mainpage-card-container " id = "test">
            <Card prize="400" id ="tffg"></Card>
            <Card prize="400"></Card>
            <Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card>
            </div>
        <Footer></Footer>
        </div>
    )
}

export default Mainpage;