import React,{useState}  from "react";
import './carPost.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";

const CarPost=()=>{
    const {state}=useLocation();
    const navigate = useNavigate()

    const [des,setDes] = useState(
        {
            brand:"",
            description:"",
            year:"",
            fuel:"",
            transmission:"",
            km:"",
        },
    )
    const [ user, setUser] = useState({
        userId:state.userId,
        location:"",
        category:"Automobiles-car",
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
        <div className="carpost">
            <form action="#" method="POST" enctype="multipart/form-data">
       <h1 class="heading">POST YOUR AD</h1>
       <div class="container">
        <div class="header">
            <h2 class="head2">SELECTED CATEGORY</h2>
            <span class="cat">Cars/Cars<a href="#"><b>Change</b></a></span>
            <span class="cat" id="link"></span>
        </div>
        <div class="content">
            <h2 class="head2">INCLUDE SOME DETAILS</h2>
            <div class="labels">
                <label for="brand"  required>Brand*</label>
                <select name="brand" id="brand">
                    <option value={des.brand} onChange={handleChangeD}></option>
                    <optgroup label="Popular Brand">
                        <option value="Maruti Suzuki">Maruti Suzuki</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Tata">Tata</option>
                        <option value="Mahindra">Mahindra</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                    </optgroup>
                    <optgroup label="All Brand">
                        <option value="BYD">BYD</option>
                        <option value="Audi">Audi</option>
                        <option value="Ambassador">Ambassador</option>
                        <option value="Ashok">Ashok</option>
                        <option value="Ashok Leyland">Ashok Leyland</option>
                        <option value="Aston">Aston</option>
                        <option value="Aston Martin">Aston Martin</option>
                        <option value="Bajaj">Bajaj</option>
                        <option value="Bentley">Bentley</option>
                        <option value="Citroen">Citroen</option>
                        <option value="BMW">BMW</option>
                    </optgroup>
                </select>
            </div>
            <div class="labels">
                <label for="year" >Year*</label>
                <input type="number" name="year" id="year" value={des.year} onChange={handleChangeD} required></input>
            </div>
            <div class="labels">
                <label for="fuel">Fuel*</label>
                <select name="fuel" id="fuel" required value={des.fuel} onChange={handleChangeD}>
                    <option value=""></option>
                    <option value="CNG&Hybrids">CNG & Hybrids</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="LPG">LPG</option>
                    <option value="petrol">Petrol</option>
                </select>
            </div>
            <div class="labels">
                <label for="transmission">Transmission*</label>
                <select name="transmission" id="transmission" value={des.transmission} onChange={handleChangeD}required>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                </select>
            </div>
            <div class="labels">
                <label for="km">KM driven*</label>
                <input type="text" name="km" id="km" onChange={handleChangeD}required></input>
            </div>
            <div class="labels">
                <label for="title">Ad title*</label>
                <input type="text" name="title" id="title" value={user.title} onChange={handleChange}placeholder="Mention the key features of your item" required>
            </input></div>
            <div class="labels">
                <label for="description">Description</label>
                <textarea name="description" id="description" placeholder="Include condition, features, and reason for selling" onChange={handleChangeD}value={des.description}rows="4"></textarea>
            </div>
            <div class="labels">
                <h2 class="head2">SET A PRICE</h2>
                <label for="price">Price*</label>
                <input type="text" name="price" id="price" placeholder="In rupees" value={user.price} onChange={handleChange} required></input>
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
            <div className="head2" style={{marginBottom:20}}>PERSEONAL DETAILS*</div>
                    <div style={{display:"flex"}}>
                    <img className="rounded-circle form-image" style={{marginLeft:30}}src={state.image}></img>
                    <div className="displayName-form">{state.displayName}</div>
                    </div>
            </div>
            <div class="labels">
                <label for="phone">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phone" onChange={handleChange}value={user.phoneNumber}></input>
            </div>
                
            
            <div class="submit-btn">
                <button  className="mobilePost-button" onClick={sendRequest}>Post Now</button>
            </div>
        </div>
       </div>
    </form>
        </div>
    )
}
export default CarPost;