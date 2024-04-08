import React from "react";
import "./mainpage.css";
import Navbar from "./Navbar.jsx";
import {useNavigage} from "react-router-dom";
import { useState } from "react";
const Card=(props)=>{ 
    return(
        <div className="mainpage-cards card">
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
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className="mainpage">
            <Navbar onClick={() => setModalOpen(true)}></Navbar>
            <div className="mainpage-card-container " id = "test">
            <Card prize="400"></Card>
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