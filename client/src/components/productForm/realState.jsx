import React ,{useState} from "react";
import './realState.css';
import {useNavigate,useParams,useLocation} from "react-router-dom";
import axios from "axios";
const RealState=()=>{
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
            Description:"",
            type:"",
            Listed:"",
            plt:"",
            length:"",
            breath:"",
            facing:"",
            project:"",
        }
    )
    const [ user, setUser] = useState({
        userId:state.userId,
        location:"",
        category:"realState",
        title:"",
        location:"",
        phoneNumber:"",
        Description:{}
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
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        //console.log(user);
    }
    return(
        <div className="realstate">
              <form action="" method="POST" enctype="multipart/form-data">
       <h1 class="heading">POST YOUR AD</h1>
       <div class="container">
        <div class="header">
            <h2 class="head2">SELECTED CATEGORY</h2>
            <span class="cat">Land/Plots<a href="#"><b>Change</b></a></span>
            <span class="cat" id="link"></span>
        </div>
        <div class="content">
            <h2 class="head2">INCLUDE SOME DETAILS</h2>
            <div class="labels">
                <label for="brand"  required>Type*</label>
                <select name="type" id="brand" value={des.type} onChange={handleChangeD}>
                    <option value=""></option>
                    
                        <option value="For Rent">For Rent</option>
                        <option value="For Sale">For Sale</option>
                        
                </select>
            </div>
            
            <div class="labels">
                <label for="Listed by">Listed by</label>
                <select name="Listed" id="Listed by" value={des.Listed}onChange={handleChangeD} required>
                    <option value=""></option>
                    <option value="Builder">Builder</option>
                    <option value="Dealer">Dealer</option>
                    <option value="Owner">Owner</option>
                    
                </select>
            </div>
            
            <div class="labels">
                <label for="plt">Plot Area*</label>
                <input type="text" name="plt" id="plt" value={des.plt} onChange={handleChangeD}required></input>
            </div>

            <div class="labels">
                <label for="length">Length</label>
                <input type="text" name="length" id="length"   value={des.length} onChange={handleChangeD}required></input>
            </div>
            <div class="labels">
                <label for="breadth">Breadth</label>
                <input type="text" name="breadth" id="breadth"  value={des.breath} onChange={handleChangeD}required></input>
            </div>
            <div class="labels">
                <label for="facing">Facing</label>
                <input type="text" name="facing" id="facing"  value={des.facing} onChange={handleChangeD}required></input>
            </div>
            <div class="labels">
                <label for="project">Project Name</label>
                <input type="text" name="project" id="project"  value={des.project} onChange={handleChangeD}required></input>
            </div>
            <div class="labels">
                <label for="title">Ad title*</label>
                <input type="text" name="title" id="title"  value={user.title} onChange={handleChange}placeholder="Mention the key features of your item" required>
            </input></div>
            <div class="labels">
                <label for="Description">Description</label>
                <textarea name="Description" id="Description" value={des.Description} onChange={handleChangeD} placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
            </div>
            <div class="labels">
                <h2 class="head2">SET A PRICE</h2>
                <label for="price">Price*</label>
                <input type="text" name="price" id="price" value={user.price} onChange={handleChange}placeholder="In rupees" required></input>
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
                <input type="tel" name="phoneNumber" id="phone" value={user.phoneNumber} onChange={handleChange}></input>
            </div>
                
            
            <div class="submit-btn">
                <button type="submit" onClick={sendRequest}>Post now</button>
            </div>
        </div>
       </div>
    </form>
        </div>
    )
}
export default RealState;