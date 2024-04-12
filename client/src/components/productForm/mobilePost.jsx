import React,{useState} from "react";
import "./mobilePost.css";
import {useNavigate,useParams,useLocation} from "react-router-dom";
import axios from "axios";
const MobilePost=()=>{
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
    const [userdata,setUserd] = useState()
    const [des,setDes] = useState(
        {
            brand:"",
            Description:"",
        }
    )

    const [ user, setUser] = useState({
        userId:userdata.userId,
        location:"",
        category:"Mobile",
        title:"",
        location:"",
        phoneNumber:"",
        Description:{},
        images:[]
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
        <div className="mobilePost">
            <div>
            <div className="mobilePost-title head">POST YOUR AD</div>

                <section className="mobilePost-section">
                    <div className="mobilePost-title">SELECTE CATEGORY</div>
                    <div className="info-input-title">Mobiles/Mobile Phones</div>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title">INCLUDE SOME DETAILS</div>
                    <div className="mobile-data">
                        <div className="mobileheading">brand *</div>
                        <input type="text" className="data-mobile-input" name="brand" value={des.brand} onChange={handleChangeD}/>
                    </div>
                    <div className="mobile-data">
                        <div className="mobileheading">Ad title*</div>
                        <input type="text" className="data-mobile-input" name="title" value={user.title} onChange={handleChange}/>
                        <div className="info-input">Mention the feacture of your item(e.g. brand,model,age,type)</div>

                    </div>
                    <div className="mobile-data">
                    <div className="mobileheading">Description*</div>
                    <input type="text" className="data-mobile-input Xcyux" name="Description" value={des.Description} onChange={handleChangeD}/>
                    <div className="info-input">Include condition,features and reason for selling</div>
                    </div>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title">SET A PRICE</div>
                    <div className="mobileheading">Price*</div>
                    <input className="data-mobile-input" name="price" value={user.price} onChange={handleChange}></input>
                </section>

                <section className="mobilePost-section ">
                <div className="mobilePost-title">UPLOAD IMAGES*</div>
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

                </section>

                <section className="mobilePost-section">
                    <div className="mobilePost-title">CONFIRM YOUR LOCATION</div>
                    <input type="text" className="data-mobile-input" name="location" value={user.location} onChange={handleChange} placeholder="     Address"/>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title" style={{marginBottom:20}}>PERSEONAL DETAILS*</div>
                    <div style={{display:"flex"}}>
                    <img className="rounded-circle form-image" style={{marginLeft:30}}src={userdata&&userdata.image}></img>
                    <div className="displayName-form">{userdata&&userdata.displayName}</div>
                    </div>
                    <div className="mobilePost-title">Phone number</div>
                    <input type="text" className="data-mobile-input" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
                </section>
                <section className="mobilePost-section post">
                    <button className=" btn mobilePost-button" onClick={(e)=>{sendRequest()}}>Post now</button>
                    {/* <button className=" btn mobilePost-button" onClick={(e)=>{sendImage()}}>image now</button> */}

                </section>
            </div>
        </div>
    )
}

export default MobilePost;
