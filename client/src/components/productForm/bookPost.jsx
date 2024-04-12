import React ,{useState} from "react";
import './bookPost.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";
import axios from "axios";

const Books=()=>{
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
        category:"Books",
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
        <div class="books">
        <div>
   <h1 class="enter">POST YOUR AD</h1>
   <div class="entries">
    <div class="enter-head">
        <h2 class="enter2">SELECTED CATEGORY</h2>
        <span class="book-sport">Books, Sports, Hobbies<a href="#"><b>Change</b></a></span>
        <span class="book-sport"></span>
    </div>
    <div class="middle">
        <h2 class="enter2">INCLUDE SOME DETAILS</h2>
       
        <div class="book-names">
            <label for="title">Ad title*</label>
            <input type="text" name="title" id="title" placeholder="Mention the key features of your item"value={user.title} onChange={handleChange}required>
        </input></div>
        <div class="book-names">
            <label for="description">description</label>
            <textarea name="description" id="description"value={des.description} onChange={handleChangeD} placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
        </div>
        <div class="book-names">
            <h2 class="enter2">SET A PRICE</h2>
            <label for="price">Price*</label>
            <input type="text" name="price" id="price"value={user.price} onChange={handleChange}placeholder="In rupees" required></input>
        </div>
        <div class="book-names">
            <h2 class="enter2">UPLOAD PHOTOS</h2>
            <div class="books-upload">
                <div class="books-upload">
                        
                    <label class="booksfile-upload-d" ><img src="/camera-icon-54.png" width="25px" height="20px" /><input  class="file-upload" type="file" name="1"accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input  class="file-upload" type="file" name="2" accept="image/jpg, image/jpeg, image/png"onChange={(e)=>handleImageChange(e)}  /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="3" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="4" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)}  /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="5" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="6" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="7" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} /></label>
                    <label class="booksfile-upload-d"><img src="/camera-icon-54.png" width="25px" height="20px"/><input class="file-upload"  type="file" name="8" accept="image/jpg, image/jpeg, image/png" onChange={(e)=>handleImageChange(e)} /></label>
            </div>           </div>
        <div class="book-names">
            <h2 class="enter2">CONFIRM YOUR LOCATION</h2>
            <label for="Location">Location*</label>
            <input type="text" name="Location" id="Location"value={user.Location} onChange={handleChange} required></input>
        </div>
        <div class="book-names">
            <h2 class="enter2">REVIEW YOUR DETAILS</h2>
                <div style={{display:"flex"}}>
                <img className="rounded-circle form-image" style={{marginLeft:30}}src={state.image}></img>
                <div className="displayName-form">{state.displayName}</div>
                </div>
        </div>
        <div class="book-names">
            <label for="phone">Phone Number</label>
            <input type="tel" name="phoneNumber" id="phone"value={user.phoneNumber} onChange={handleChange}></input>
        </div>
            
        
        <div class="click-btn">
            <button type="submit" onClick={sendRequest}>Post now</button>
        </div>
    </div>
   </div>
</div>
    </div>
    </div>
    )
}
export default Books;