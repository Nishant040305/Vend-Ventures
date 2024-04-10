import React ,{useState} from "react";
import './electronics.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";

const Electronics=()=>{
    const {state}=useLocation();
    const navigate = useNavigate()

    const [des,setDes] = useState(
        {

            description:"",
        }
    )
    const [ user, setUser] = useState({
        userId:state.userId,
        location:"",
        category:"Electronics",
        title:"",
        location:"",
        phoneNumber:"",
        description:{}
 })
    const sendRequest=async()=>{
        try{
            const response = await fetch('http://localhost:5000/productcreate/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept':"/",
                  },
                  body: JSON.stringify(user)
                }).then(response => response.json()).then(data=>{
                  if(data.error){
                      throw new Error(data.error);
                  }
                  else{
                      //console.log(data);
                      let id = data.id;
                      navigate('/');
                  }
                }).catch (error=>{
                      //console.log(error.message)
                    
                }) 
                
            }
            catch(err){
              //console.log("Some error occured");
            }
    }
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        //console.log(user);
    }
    const handleChangeD = e => {
        const { name, value } = e.target
        setDes({
            ...des,
            [name]: value
        })
        setUser({
            ...user,
            ["description"]:des
        })
        //console.log(user);
    }
    return(
        <div className="electronics">
            <div>
       <h1 class="heading">POST YOUR AD</h1>
       <div class="container">
        <div class="header">
            <h2 class="head2">SELECTED CATEGORY</h2>
            <span class="cat">Electronics & Appliances/TVs,Video-Audio<a href="#"><b>Change</b></a></span>
            <span class="cat"></span>
        </div>
        <div class="content">
            <h2 class="head2">INCLUDE SOME DETAILS</h2>
           
            <div class="labels">
                <label for="title">Ad title*</label>
                <input type="text" name="title" id="title" placeholder="Mention the key features of your item"value={user.title} onChange={handleChange}required>
            </input></div>
            <div class="labels">
                <label for="description">Description</label>
                <textarea name="description" id="description"value={des.description} onChange={handleChangeD} placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
            </div>
            <div class="labels">
                <h2 class="head2">SET A PRICE</h2>
                <label for="price">Price*</label>
                <input type="text" name="price" id="price"value={user.price} onChange={handleChange}placeholder="In rupees" required></input>
            </div>
            <div class="labels">
                <h2 class="head2">UPLOAD PHOTOS</h2>
                <input type="file" name="photo1" accept="image/*" required></input>
            </div>
            <div class="labels">
                <h2 class="head2">CONFIRM YOUR LOCATION</h2>
                <label for="location">Location*</label>
                <input type="text" name="location" id="location"value={user.location} onChange={handleChange} required></input>
            </div>
            <div class="labels">
                <h2 class="head2">REVIEW YOUR DETAILS</h2>
                    <div style={{display:"flex"}}>
                    <img className="rounded-circle form-image" style={{marginLeft:30}}src={state.image}></img>
                    <div className="displayName-form">{state.displayName}</div>
                    </div>
            </div>
            <div class="labels">
                <label for="phone">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phone"value={user.phoneNumber} onChange={handleChange}></input>
            </div>
                
            
            <div class="submit-btn">
                <button type="submit" onClick={sendRequest}>Post now</button>
            </div>
        </div>
       </div>
    </div>
        </div>
    )
}
export default Electronics;