import React ,{useState} from "react";
import './fashionPost.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";
import axios from "axios";

const Furniture=()=>{
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
        <div class="furniture">
        <div>
   <h1 class="up">POST YOUR AD</h1>
   <div class="wood">
    <div class="up-head">
        <h2 class="up2">SELECTED CATEGORY</h2>
        <span class="products">Furniture-Tables,chairs,cupboards<a href="#"><b>Change</b></a></span>
        <span class="products"></span>
    </div>
    <div class="inner">
        <h2 class="up2">INCLUDE SOME DETAILS</h2>
       
        <div class="tables">
            <label for="title">Ad title*</label>
            <input type="text" name="title" id="title" placeholder="Mention the key features of your item"value={user.title} onChange={handleChange}required>
        </input></div>
        <div class="tables">
            <label for="description">description</label>
            <textarea name="description" id="description"value={des.description} onChange={handleChangeD} placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
        </div>
        <div class="tables">
            <h2 class="up2">SET A PRICE</h2>
            <label for="price">Price*</label>
            <input type="text" name="price" id="price"value={user.price} onChange={handleChange}placeholder="In rupees" required></input>
        </div>
        <div class="tables">
            <h2 class="up2">UPLOAD PHOTOS</h2>
            <div class="wood-upload">
                <div class="woodfile-upload
">
                        
                    <label class="woodfile-upload-d" ><img src="/camera-icon-54.png" width="25px" height="20px"/><input  class="file-upload" type="file" name="1"accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input  class="file-upload" type="file" name="2" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="3" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="4" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="5" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="6" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="7" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
                    <label class="woodfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="8" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}/></label>
            </div>
                    
            </div>            </div>
        <div class="tables">
            <h2 class="up2">CONFIRM YOUR LOCATION</h2>
            <label for="location">Location*</label>
            <input type="text" name="location" id="location"value={user.location} onChange={handleChange} required></input>
        </div>
        <div class="tables">
            <h2 class="up2">REVIEW YOUR DETAILS</h2>
                <div style={{display:"flex"}}>
                <img class="rounded-circle form-image" style={{marginLeft:30}}src={state.image}></img>
                <div class="displayName-form">{state.displayName}</div>
                </div>
        </div>
        <div class="tables">
            <label for="phone">Phone Number</label>
            <input type="tel" name="phoneNumber" id="phone"value={user.phoneNumber} onChange={handleChange}></input>
        </div>
            
        
        <div class="last-btn">
            <button type="submit" onClick={sendRequest}>Post now</button>
        </div>
    </div>
   </div>
</div>
    </div>
    )
}
export default Furniture;