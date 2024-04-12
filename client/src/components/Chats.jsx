import React from "react";
import './Chats.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from "axios";
const Message =(props)=>{
    return(
        <div className="message" style={{float:props.sender}}>

            {props.sender==="left"?<div className="message-sticker-chat rounded-circle"><img className="sticker-chat " src="/user_.png" ></img></div>:<div/>}
            <div className="message-text">asfkljhirufdnmhfjkfsjdfnkr;hsddddddddddddddddddddddddddnmsffffffffffffffffffffffffffffffffddddddddddddddddddddddlskddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
            {props.sender==="right"?<div className="message-sticker-chat rounded-circle"><img className="sticker-chat " src="/user_.png" ></img></div>:<div/>}

        </div>
    )
}
const Chats =()=>{
    const response = axios.post()
    return(
        <div className="chats">
            <Navbar/>
            <div className="chat-collection">
                <div className="main-info">
                    <img src="/images/img1.jpg" className="rounded-circle main-info-chat"></img> 
                    <div class="users-info">


                    </div>
                    </div>
                <div className="chatting">
                    <div className="messging">
                        <Message sender="right"></Message>
                        <Message sender="left"></Message>

                    </div>
                    <div className="message-chat"><input className="message-box"></input><div><button className="btn btn-success">Send</button></div></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Chats;