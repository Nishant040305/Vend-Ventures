/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./mainpage.css";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import {useNavigate} from "react-router-dom";
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
    return(
        <div className="mainpage-cards card" onClick={async () => await onCardClick()}>
            <img className="card-img-top" alt="..."src="vendVentures.png"></img>
            <div class="card-body">
            <div className="card-title"><div style={{fontWeight:700, fontSize:25}}>Brain</div><img src="heart.png"></img></div>

            
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
            <Navbar seeing ={1}></Navbar>
            <div className="mainpage-card-container " id = "test">
            <Card prize="400" id="tffg"></Card>
            <Card prize="400"></Card>
            <Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card><Card prize="400"></Card>
            <Card prize="400"></Card>
        </div>
        </div>
    )
}

export default Mainpage;