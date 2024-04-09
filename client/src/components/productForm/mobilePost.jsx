import React,{useState} from "react";
import "./mobilePost.css";
import {useNavigate,useParams} from "react-router-dom";

const MobilePost=()=>{
    // const {id}=useParams();
    const id ="9845612";
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
        userId:id,
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
                    
                }) 
                
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
    }
    return(
        <div className="mobilePost">
            <form>
            <div className="mobilePost-title head">POST YOUR AD</div>

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