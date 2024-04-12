import React ,{useState} from "react";
import './motorCycle.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";
import axios from "axios";
const MotorCycle=()=>{
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
            brand:"",
            description:"",
            km:"",
            year:"",
        }
    )
    const [ user, setUser] = useState({
        userId:state.userId,
        location:"",
        category:"Automobiles-motorcycle",
        title:"",
        location:"",
        phoneNumber:"",
        description:{}
 })
 const sendRequest=async()=>{
    //console.log(user);
    try {
        const formData = new FormData();
        formData.append('file',images);
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
            ["description"]:des
        })
        //console.log(user);
    }
    return(
        <div className="motorcycle">
            <form action="#" method="POST" enctype="multipart/form-data">
       <h1 class="heading">POST YOUR AD</h1>
       <div class="container">
        <div class="header">
            <h2 class="head2">SELECTED CATEGORY</h2>
            <span class="cat">Bikes/Motorcycles<a href="#"><b>Change</b></a></span>
            <span class="cat"></span>
        </div>
        <div class="content">
            <h2 class="head2">INCLUDE SOME DETAILS</h2>
            <div class="labels">
                <label for="brand"  required>brand*</label>
                <select name="brand" value={des.brand} onChange={handleChangeD} id="brand">
                    <option value=""></option>
                    
                        <option value="Harley-Davidson">Harley-Davidson</option>
                        <option value="Yezdi">Yezdi</option>
                        <option value="BMW">BMW</option>
                        <option value="Kawasaki">Kawasaki</option>
                        <option value="Revolt">Revolt</option>
                        <option value="Ducati">Ducati</option>
                   
                    
                        <option value="Jawa">Jawa</option>
                        <option value="Benelli">Benelli</option>
                        <option value="Aprilia">Aprilia</option>
                        <option value="Ashok">Ashok</option>
                        <option value="Avanturaa Choppers">Avanturaa Choppers</option>
                        <option value="BSA">BSA</option>
                        <option value="CFMoto">CFMoto</option>
                        <option value="Cleveland CycleWerks">Cleveland CycleWerks</option>
                        <option value="Eider">Eider</option>
                        <option value="Emflux Motors">Emflux Motors</option>
                        <option value="Escorts">Escorts</option>
                    
                </select>
            </div>
            <div class="labels">
                <label for="year" value={des.brand} onChange={handleChangeD}  >Year*</label>
                <input type="number" name="year" id="year" required></input>
            </div>
           
            <div class="labels">
                <label for="km" value={des.km} onChange={handleChangeD} >KM driven*</label>
                <input type="text" name="km" id="km" required></input>
            </div>
            <div class="labels">
                <label for="title" >Ad title*</label>
                <input type="text"value={user.title} onChange={handleChange} name="title" id="title" placeholder="Mention the key features of your item" required>
            </input></div>
            <div class="labels">
                <label for="description"  value={des.description} onChange={handleChangeD}>description</label>
                <textarea name="description" id="description" placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
            </div>
            <div class="labels">
                <h2 class="head2">SET A PRICE</h2>
                <label for="price">Price*</label>
                <input type="text" name="price" id="price" value={user.prize} onChange={handleChange}placeholder="In rupees" required></input>
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
                </div>            </div>
            <div class="labels">
                <h2 class="head2">CONFIRM YOUR LOCATION</h2>
                <label for="location">Location*</label>
                <input type="text" name="location" id="location" value={user.location} onChange={handleChange} required></input>
            </div>
            <div class="labels">
                <h2 class="head2">REVIEW YOUR DETAILS</h2>
                    <div style={{display:"flex"}}>
                    <img className="rounded-circle form-image" style={{marginLeft:30}}src={state.image}></img>
                    <div className="displayName-form">{state.displayName}</div>
                    </div>
            </div>
            <div class="labels">
                <label for="phone">Phone Number  </label>
                <input type="tel" name="phoneNumber" id="phone" value={user.phoneNumber} onChange={handleChange}></input>
            </div>
                
            
            <div class="submit-btn">
                <button type="submit" onClick={sendRequest}>Submit Ad</button>
            </div>
        </div>
       </div>
    </form>
        </div>
    )
}
export default MotorCycle;