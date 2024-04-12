import React from "react";
import "./mainpage.css";
import Navbar from "./Navbar.jsx";
import {useNavigate,useLocation,useParams} from "react-router-dom";
import { useState,useEffect } from "react";
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
            <img className="card-img-top" alt="..."src={props.image} onClick={async () => await onCardClick()}></img>
            <div className="card-body">
            <div className="card-title"><div style={{fontWeight:700, fontSize:25}}>{props.title}</div><img class="heart" id={`${props.id}`}  src="heart.png" onClick={(e)=>{likeDislike(props.id)}}></img></div>
            
            
            <div className="cards-discription card-text">
                {props.Description} 
                <br></br><br></br><br></br>
                {props.location}
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

    const [query,setQuery] = useState("")
    let {searchTerm} = useParams();
    console.log(searchTerm);
    // console.log(searchTerm);
    // try{
    //     if(searchTerm!=null || searchTerm!=""||searchTerm!="undefined"){
    //         // console.log(statement);
    //         setQuery(searchTerm);
    //     }
    // }
    // catch(error){
    //     console.log(error);
    // }


    // let {state} = useLocation();
    // setQuery(state);
    const getDetails = async()=>{
        console.log(query)
        let test = (query != "") ? {
            category:query
        } : {};
        try{
            const response = await axios.post('http://localhost:5000/productlist/', test, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if(response.data.error){
                throw new Error(response.data.error);
            }
            else{
                // console.log(response.data)
                setProduct(response.data);
            }
        }
        catch(error){
            //console.log(error.message);
        }
    }
    
    useEffect(() => {
        getDetails()
    }, [query])
    useEffect(() => {
        if(searchTerm && searchTerm !== "" && searchTerm !== "undefined"){
            let actualSearchTerm = searchTerm.replace(/"/g, '');
            console.log(searchTerm)
            setQuery(actualSearchTerm);
        }
    
        
    }, [searchTerm]); // Only re-run the effect if searchTerm changes
    
    return(
        <div className="mainpage">
            <Navbar></Navbar>
            <div className="mainpage-card-container " id = "test">
            {product.map((info, index) => (<Card prize={info.price} location={info.location} Description={info.description.Description} title={info.title} id={info._id} image = {info.images[0]}></Card>))}
            </div>
        <Footer></Footer>
        </div>
    )
}

export default Mainpage;