import React, { useEffect } from "react";
import './chat.css';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { socket } from '../socket';
import {useParams,useLocation} from "react-router-dom";
const Message =(props)=>{
    return(
        <div className="message" style={{float:props.sender}}>

            {props.sender==="left"?<div className="message-sticker-chat rounded-circle"><img className="sticker-chat " src="/user_.png" ></img></div>:<div/>}
            <div className="message-text">asfkljhirufdnmhfjkfsjdfnkr;hsddddddddddddddddddddddddddnmsffffffffffffffffffffffffffffffffddddddddddddddddddddddlskddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
            {props.sender==="right"?<div className="message-sticker-chat rounded-circle"><img className="sticker-chat " src="/user_.png" ></img></div>:<div/>}

        </div>
    )
}
const Chats = ()=>{
    const {chatId} = useParams();
    const {state} = useLocation();
    const {user, owner, channel, isOwner} = state;
    // console.log(state);

    socket.connect();

    socket.on('message', (message) => {
        console.log(message);
    });

    function sendMessage(value) {
        var msg = {
            channel: chatId,
            user: isOwner ? owner._id : user._id,
            message: { type: "text", content: value || "Hello World" }
        }
        socket.emit('message', msg);
    }

    return(
        <div className="chats">
            <Navbar/>
            <div className="chat-collection">
                <div className="main-info">
                    <img src="/images/img1.jpg" className="rounded-circle main-info-chat"></img> 
                    <div class="users-info">
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;Nishant Mohan</div>

                    </div>
                    </div>
                <div className="chatting">
                    <div className="messging">
                        <Message sender="right"></Message>
                        <Message sender="left"></Message>

                    </div>
                    <div className="message-chat"><input className="message-box"></input><div><button onClick={()=>{sendMessage()}} className="btn btn-success">Send</button></div></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Chats;