import React, { useState, useEffect } from "react";
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
            <div className="message-text">{props.text}</div>
            {props.sender==="right"?<div className="message-sticker-chat rounded-circle"><img className="sticker-chat " src="/user_.png" ></img></div>:<div/>}

        </div>
    )
}
const Chats = ()=>{
    const {chatId} = useParams();
    const {state} = useLocation();
    const [messeges,setMessages] = useState([]);
    const [message_sending,setMess] = useState();
    const [Reciever, setRec] = useState(null);
    const {user, owner, channel} = state;
    // console.log(state);

    socket.connect();
    useEffect(() => {
        fetchMessages();
        socket.on('message', (msg) => {
            setMessages(prevMessages => [...prevMessages, {
                content: msg.message.content,
                sender: ((msg.user === user._id) ? "right" : "left")
            }]);
        });
        return () => {
            socket.off('message');
        };
    }, []);
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          sendMessage();
        }
      };
    const handleChange =(e)=>{
        setMess(e.target.value);
    }
    function sendMessage() {
        var msg = {
            channel: chatId,
            user: user._id || "Dummy User",
            message: { type: "text", content: message_sending}
        }
        if (message_sending) socket.emit('message', msg);
        setMess("");
    }
    async function fetchMessages() {
        // user display name
        try {
            const response = await axios.post('http://localhost:5000/userinfo/', {
                _id: channel.userId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.error) {
                throw new Error(response.data.error);
            } else {
                console.log(response.data);
                setRec(response.data.data);
            }
        } catch (error) {
            console.log(error.message);
        }
        // messages
        try {
            const response = await axios.post('http://localhost:5000/fetchChat/', {
                _id: chatId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.error) {
                throw new Error(response.data.error);
            } else {
                setMessages(response.data.channel.messages.map(function(i) {
                    return {
                        content: i.message.content,
                        sender: ((i.user === user._id) ? "right" : "left")
                    }
                }));
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <div className="chats">
            <Navbar/>
            <div className="chat-collection">
                <div className="main-info">
                    <img src="/images/img1.jpg" className="rounded-circle main-info-chat"></img> 
                    {Reciever?<div class="users-info">
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;{owner.displayName}</div>
                    <div className="whitedata"><img src="/user_.png" className="sticker-chat"></img>&nbsp;{Reciever.displayName}</div>
                    </div>:<div></div>}
                    </div>
                <div className="chatting">
                    <div className="messging" id = "dashboard_message">
                    {
                    messeges.map((info, index) => (
                        <Message sender={info.sender} text={info.content}></Message>
                    ))
                    }
                    </div>
                    <div className="message-chat"><input className="message-box" value={message_sending} onChange={handleChange} onKeyDown={handleKeyPress}></input><div><button onClick={()=>{sendMessage()}} className="btn btn-success">Send</button></div></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Chats;