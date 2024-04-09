import React from "react";
import "./mobilePost.css";

const MobilePost=()=>{
//     const [ user, setUser] = useState({
//         userId:"",
//         location:"",
//         category:"Mobile",
//         title:"",
//         discription:"",
        

//  })
//     const sendRequest=async()=>{
//         try{
//             const response = await fetch('http://localhost:5000/productcreate/', {
//                   method: 'POST',
//                   headers: {
//                     'Content-Type': 'application/json',
//                     'Accept':"/",
//                   },
//                   body: JSON.stringify({Username:username,email:email,password:password})
//                 }).then(response => response.json()).then(data=>{
//                   if(data.error){
//                       throw new Error(data.error);
//                   }
//                   else{
//                       console.log(data);
//                       let id = data.id;
//                       navigate('/');
//                   }
//                 }).catch (error=>{
//                       console.log(error.message)
                    
//                 }) 
                
//             }
//             catch(err){
//               console.log("Some error occured");
//             }
//     }
//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
return(
    <div className="mobilePost">
<form action="#" method="POST" enctype="multipart/form-data">
   <h1 class="heading">POST YOUR AD</h1>
   <div class="container">
    <div class="header">
        <h2 class="head2">SELECTED CATEGORY</h2>
        <span class="cat">Mobiles/Mobile Phones<a href="#"><b>Change</b></a></span>
        <span class="cat" id="link"></span>
    </div>
    <div class="content">
        <h2 class="head2">INCLUDE SOME DETAILS</h2>
        <div class="labels">
            <label for="brand"  required>Brand*</label>
            <select name="brand" id="brand">
                <option value=""></option>
                <optgroup label="Popular Brand">
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Mi">Mi</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Realme">Realme</option>
                </optgroup>
                <optgroup label="All Brand">
                    <option value="Asus">Asus</option>
                    <option value="BlackBerry">BlackBerry</option>
                    <option value="Gionee">Gionee</option>
                    <option value="Google Pixel">Google Pixel</option>
                    <option value="Honor">Honor</option>
                    <option value="HTC">HTC</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Infinix">Infinix</option>
                    <option value="Intex">Intex</option>
                    <option value="Lava">Lava</option>
                    <option value="Lenovo">Lenovo</option>
                </optgroup>
            </select>
        </div>
       
        <div class="labels">
            <label for="title">Ad title*</label>
            <input type="text" name="title" id="title" placeholder="Mention the key features of your item" required>
        </input></div>
        <div class="labels">
            <label for="description">Description</label>
            <textarea name="description" id="description" placeholder="Include condition, features, and reason for selling" rows="4"></textarea>
        </div>
        <div class="labels">
            <h2 class="head2">SET A PRICE</h2>
            <label for="price">Price*</label>
            <input type="text" name="price" id="price" placeholder="In rupees" required></input>
        </div>
        <div class="labels">
            <h2 class="head2">UPLOAD PHOTOS</h2>
            <input type="file" name="photo1" accept="image/*" required></input>
        </div>
        <div class="labels">
            <h2 class="head2">CONFIRM YOUR LOCATION</h2>
            <label for="location">Location*</label>
            <input type="text" name="location" id="location" required></input>
        </div>
        <div class="labels">
            <h2 class="head2">REVIEW YOUR DETAILS</h2>
            <label for="name">Name</label>
            <input type="text" name="name" id="name"></input>
        </div>
        <div class="labels">
            <label for="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone"></input>
        </div>
            
        
        <div class="submit-btn">
            <button type="submit">Submit Ad</button>
        </div>
    </div>
   </div>
</form>
    </div>
)
    }
    


export default MobilePost;