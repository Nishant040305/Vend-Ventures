import React from "react";
import "./mainpage.css";
import Navbar from "./Navbar.jsx";
import {useNavigate,useLocation} from "react-router-dom";
import { useState,useEffect } from "react";
import Footer from "./Footer.jsx";
import axios from "axios";

const DEBUG = false;

const Card=(props)=>{ 
    const navigate = useNavigate();
    async function onCardClick() {
        try {
            const response = await axios.get("http://localhost:5000/login/sucess",{withCredentials:true});
            if (!response.data.user && !DEBUG) {
                document.getElementById("loginBtn").click();
            } else {
                // console.log(response.data.user);
                navigate(`/product/${props.id}`, {state:response.data.user});
            }
        } catch (err) {
            console.error(err);
        }
    }
    const likeDislike=(id)=>{

        if(document.getElementById(`${id}`).src==="http://localhost:3000/heart-png-38780.png"){
            document.getElementById(`${id}`).src="heart.png";

        }
        else{
            document.getElementById(`${id}`).src="heart-png-38780.png";
        }

    }
    return(
        <div className="mainpage-cards card">
            <img className="card-img-top" alt="..."src={props.images} onClick={async () => await onCardClick()}></img>
            <div className="card-body">
            <div className="card-title"><div style={{fontWeight:700, fontSize:25}}>{props.title}</div><img class="heart" id={`${props.id}`}  src="heart.png" onClick={(e)=>{likeDislike(props.id)}}></img></div>
            
            
            <div className="cards-discription card-text">
                {props.description} 
                <br></br><br></br>
                <img src="location.png" width="30px" height="30px"></img>{props.location}
            </div>
            <div className="cards-prize container">
                <img src="rupee.png"></img>{props.prize}
            </div>
            </div>
        </div>
    )
}
const Mainpage=()=>{
    const [product,setProduct] = useState([]);
    const [query,setQuery] = useState({});
    var params = new URLSearchParams(window.location.search);
    if (params.has("s")) {
        query["searchTerm"] = params.get("s").replace(/\+/g, ' ');;
    }
    if (params.has("c")) {
        query["category"] = params.get("c").replace(/\+/g, ' ');
    }
    if (params.has("l")) {
        query["locationTerm"] = params.get("l").replace(/\+/g, ' ');
    }
    const getDetails = async()=>{
        try{
            const response = await axios.post('http://localhost:5000/productlist/', query, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if(response.data.error){
                throw new Error(response.data.error);
            }
            else{
                console.log(response.data)
                setProduct(response.data);
            }
        }
        catch(error){
            //console.log(error.message);
        }
    }
    
    useEffect(() => {
        getDetails()
    }, [])
    return(
        <div className="mainpage">
            <Navbar></Navbar>
            <div className="mainpage-card-container " id = "test">
            {product.map((info, index) => (<Card images={info.images[0] || "vendVentures.png"} prize={info.price} location={info.location} description={info.description.description} title={info.title} id={info._id}></Card>))}
            </div>
        <Footer></Footer>
        </div>
    )
}

export default Mainpage;