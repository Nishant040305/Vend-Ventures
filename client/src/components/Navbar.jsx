/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import './loginpage.css';
function toggle(){
    var element = document.getElementById("test");
    element.classList.toggle("active");
    
}

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}
const loginwithgoogle =()=>{
    window.open("http://localhost:5000/auth/google/callback","_self")
}

const Navbar =()=>{
    const [seen,setSeen] = useState(false);
    const [userdata, setUserdata] = useState({});
    console.log("response", userdata)
    const navigate = useNavigate();
    const getUser = async()=>{
        try {
            const response = await axios.get("http://localhost:5000/login/sucess",{withCredentials:true});
            if (response.data.user) setUserdata(response.data.user);
        } catch (error) {
            
        }
    }
    const logout = ()=>{
        window.open("http://localhost:5000/logout","_self")
    }

    useEffect(() => {
        getUser()
    }, [])
   
    const visible = (e) => {
        let ele = document.getElementsByClassName("header-bottom-bar");
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].style.visibility== "visible"){
                ele[i].style.visibility = "hidden";
            }
            else{
                ele[i].style.visibility = "visible";

            }
        }
    }
    const visibleLogin =()=>{
        
        if(seen===false){
            toggle();
            setSeen(!seen);
        }
    }
    const notvisibleLogin = ()=>{
        toggle();

        setSeen(!seen);
    }
    const windowWidth = useWindowWidth();
    console.log(windowWidth);
    const isVisible = windowWidth >=1121 ;
    return(
        <div className="header">
        <div className="dashboard-navbar">
            <form>          
                <img className="logo_icon" src="vendVentures.png"></img>
                        <div style={{display:"flex"}}>
                            <div class="_1JkUe">
                                <div data-aut-id="locationBox" class="bGCL7">
                                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                        <path class="rui-w4DG7" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                                    </svg>
                                    <input class="_1dasd" placeholder="Search city, area or locality" value=""/>
                                    <span class="_3UNpw">
                                        <button type="button" class="rui-3a8k1" role="button" tabindex="0" data-aut-id="" title="">
                                            <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                                <path class="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    <input className="form-control mr-sm-2 search root" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success submit-button" type="submit">Search</button>
                    <button className="btn  category" type="button" onClick={(e)=>{visible(e)}}>Category</button>
                    <div className="icon root"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30">
                        <path fill="none" d="M25.532 23.71c-1.71-1.71-2.53-3.47-2.53-8.71 0-5.31-3.432-9-8.003-9s-8.004 3.69-8.004 9c0 5.24-.82 7-2.53 8.71-.11.1-.19.2-.25.29H25.78c-.058-.09-.138-.19-.248-.29z"/>
                        <path fill="#494c4e" d="M9.34 20.974c.263.087.546-.054.634-.316.3-.903.36-1.605.36-3.195 0-3.065.418-4.508 2.52-6.61.195-.194.195-.51 0-.706-.195-.195-.512-.195-.707 0-2.323 2.323-2.814 4.01-2.814 7.317 0 1.484-.052 2.11-.308 2.88-.088.26.054.543.316.63z"/>
                        <path fill="#494c4e" d="M26.942 22.29c-1.29-1.29-1.94-2.53-1.94-7.29 0-4.32-1.96-7.83-5-9.64V4C20 1.8 18.2 0 16 0h-2c-2.2 0-4 1.8-4 4v1.36C6.957 7.17 4.997 10.68 4.997 15c0 4.76-.65 6-1.94 7.29-1.51 1.51-1.51 3.71.7 3.71h6.34c.46 2.28 2.482 4 4.902 4s4.44-1.72 4.9-4h6.34c2.21 0 2.21-2.2.7-3.71zM12 4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v.46c-.94-.3-1.95-.46-3-.46s-2.06.16-3 .46V4zm3 24c-1.3 0-2.41-.84-2.82-2h5.64c-.41 1.16-1.52 2-2.82 2zM4.218 24c.06-.09.14-.19.25-.29 1.71-1.71 2.53-3.47 2.53-8.71 0-5.31 3.43-9 8.002-9s8.002 3.69 8.002 9c0 5.24.82 7 2.53 8.71.11.1.19.2.25.29H4.22z"/>
                        </svg>
                    </div>
                <hr className="vertical-line"/>
                {userdata.image?<div style={{display:"flex",flexDirection:"row"}}><img className="rounded-circle img-profile-icon" src={userdata.image} ></img><button type="button" className="btn sell-button login-button-navbar"  onClick={logout}>Logout</button></div>:<button type="button" className="btn sell-button login-button-navbar" onClick={visibleLogin} id="loginBtn">Login</button>}
                
                <button className="sell-button btn " type="button">SELL</button>
            </form>
            <div class="header-bottom-bar">
                <ul class="navbar-menu-cat">
                <li class="text-bold">All Categories<i class="fa-solid fa-angle-down"></i></li>
                <li>Mobile Phones</li>
                <li>Cars</li>
                <li>motor cycles</li>
                <li>House</li>
                <li>TVs</li>
                <li>Land &plots</li>
            </ul>
            </div>
            

        </div>
            {seen&&<div className="loginpage">
            {isVisible && <img className="login-image" src="img.png" alt="Login" />}
            <div className="Login-info">
                <div className="Login-email">
                    <div className = "Login-title">
                        <div className="log">
                        Login
                        </div>
                        <div className="login-cross" onClick={notvisibleLogin}><img src="close.png"></img></div>
                    </div>
                    <div className="Login-data">
                        Enter your email to log in.
                    </div>
                    <div className="Login-content">
                        <input className ="Login-email-input" placeholder="     Enter your email"></input>
                        <button className=" btn Login-email-buttton">Continue</button>
                    </div>

                </div>
                <div className="line" style={{display:"flex"}}>
                    <hr></hr> OR <hr></hr>
                </div>
                <div className="Login-Oauth">
                    <div className="Login-term">
                        <div className="term">
                        By continuing, you agree to the updated <strong>Terms of Sale</strong>,<strong>Terms of Service</strong> and <strong>Privacy Policy.</strong>

                        </div>
                        <div className="Login-oauth-button">
                            <button className="btn Login-email-buttton google" onClick={loginwithgoogle}>
                                <img src="google.png"></img>Continue with Google
                            </button>
                            <button className="btn Login-email-buttton facebook">
                               <img src="facebook.ico"></img> Continue with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    );
}

export default Navbar;