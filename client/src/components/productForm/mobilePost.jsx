import React,{useState} from "react";
import "./mobilePost.css";
import {useNavigate,useParams,useLocation} from "react-router-dom";

const MobilePost=()=>{

    const {state}=useLocation();
    const navigate = useNavigate()

    const [des,setDes] = useState(
        {
            brand:"",
        },
        {
            description:"",
        }
    )
    const [ user, setUser] = useState({
        userId:state.userId,
        location:"",
        category:"Mobile",
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
                      console.log(data);
                      let id = data.id;
                      navigate('/');
                  }
                }).catch (error=>{
                      console.log(error.message)

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
            catch(err){
              console.log("Some error occured");
            }
    }
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        console.log(user);
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
        console.log(user);

                <section className="mobilePost-section">
                    <div className="mobilePost-title">SELECTE CATEGORY</div>
                    <div className="info-input-title">Mobiles/Mobile Phones</div>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title">INCLUDE SOME DETAILS</div>
                    <div className="mobile-data">
                        <div className="mobileheading">Brand *</div>
                        <input type="text" className="data-mobile-input" name="brand" value={des.brand} onChange={handleChangeD}/>
                    </div>
                    <div className="mobile-data">
                        <div className="mobileheading">Ad title*</div>
                        <input type="text" className="data-mobile-input" name="title" value={user.title} onChange={handleChange}/>
                        <div className="info-input">Mention the feacture of your item(e.g. brand,model,age,type)</div>

                    </div>
                    <div className="mobile-data">
                    <div className="mobileheading">Description*</div>
                    <input type="text" className="data-mobile-input Xcyux" name="description" value={des.description} onChange={handleChangeD}/>
                    <div className="info-input">Include condition,features and reason for selling</div>
                    </div>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title">SET A PRICE</div>
                    <div className="mobileheading">Price*</div>
                    <input className="data-mobile-input" name="price" value={user.price} onChange={handleChange}></input>
                </section>
                <section className="mobilePost-section"></section>

                <section className="mobilePost-section">
                    <div className="mobilePost-title">CONFIRM YOUR LOCATION</div>
                    <input type="text" className="data-mobile-input" name="location" value={user.location} onChange={handleChange} placeholder="     Address"/>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title" style={{marginBottom:20}}>PERSEONAL DETAILS*</div>
                    <div style={{display:"flex"}}>
                    <img className="rounded-circle form-image" style={{marginLeft:30}}src={state.image}></img>
                    <div className="displayName-form">{state.displayName}</div>
                    </div>
                    <div className="mobilePost-title">Phone number</div>
                    <input type="text" className="data-mobile-input" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
                </section>
                <section className="mobilePost-section post">
                    <button className=" btn mobilePost-button" onClick={(e)=>{sendRequest()}}>Post now</button>
                </section>
            </form>
        </div>
    )
}

export default MobilePost;