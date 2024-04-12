import React,{useState}  from "react";
import './carPost.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";
import axios from "axios";

const CarPost=()=>{
    const [images, setImages] = useState({
        index1:"",
        index2:"",
        index3:"",
        index4:"",
        index5:"",
        index6:"",
        index7:"",
        index8:""

    });
    const {state}=useLocation();
    const navigate = useNavigate()

    const [des,setDes] = useState(
        {
            Brand:"",
            Description:"",
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
        Description:{}
 })
 const sendRequest = async () => {
    try {
        const formData = new FormData();

Object.entries(images).forEach(([key, image]) => {
    formData.append('files',image);

    // Use the key as the field name
});
console.log(formData);
console.log(user);
const userJson = JSON.stringify(user);
formData.append('user', userJson);


        const response = await axios({
            method: 'POST',
            url: 'http://localhost:5000/productcreate/',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData
        });

        if(response.data.error){
            throw new Error(response.data.error);
        }
        else{
            navigate('/');
        }
    }
    catch(err){
        //console.log(err.message);
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
    const handleImageChange = e => {
        let name = `index${e.target.name}`;
        setImages({
            ...images,
            [name]: e.target.files[0]
        });
        setUser({
            ...user,
            ["images"]:images
        });
    }
    const handleChangeD = e => {
        const { name, value } = e.target
        setDes({
            ...des,
            [name]: value
        })
        setUser({
            ...user,
            ["Description"]:des
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
                <label for="Brand"  required>Brand*</label>
                <select name="Brand" id="Brand">
                    <option value={des.Brand} onChange={handleChangeD}></option>
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
                <label for="Description">Description</label>
                <textarea name="Description" id="Description" placeholder="Include condition, features, and reason for selling" onChange={handleChangeD}value={des.Description}rows="4"></textarea>
            </div>
            <div class="labels">
                <h2 class="head2">SET A PRICE</h2>
                <label for="price">Price*</label>
                <input type="text" name="price" id="price" placeholder="In rupees" value={user.price} onChange={handleChange} required></input>
            </div>
            <div class="labels">
                <h2 class="head2">UPLOAD PHOTOS</h2>
                <div className="file-uploading">
                        
                        <label className="file-upload-d" ><img src="/camera-icon-54.png" width="25px" height="20px"></img><input  className="file-upload" type="file" name="1"accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} required /></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input  className="file-upload" type="file" name="2" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input className="file-upload"  type="file" name="3" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input className="file-upload"  type="file" name="4" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input className="file-upload"  type="file" name="5" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input className="file-upload"  type="file" name="6" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input className="file-upload"  type="file" name="7" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                        <label className="file-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input className="file-upload"  type="file" name="8" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                </div>
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