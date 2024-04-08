import React from "react";
import "./mobilePost.css";

const MobilePost=()=>{
    const [ user, setUser] = useState({
        userId:"",
        location:"",
        category:"Mobile",
        title:"",
        discription:"",
        

 })
    const sendRequest=()=>{
        try{
            const response = await fetch('http://localhost:5000/productcreate/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept':"/",
                  },
                  body: JSON.stringify({Username:username,email:email,password:password})
                }).then(response => response.json()).then(data=>{
                  if(data.error){
                      throw new Error(data.error);
                  }
                  else{
                      console.log(data);
                      let id = data.id;
                      navigate(/);
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
                        <input type="text" className="data-mobile-input" />
                    </div>
                    <div className="mobile-data">
                        <div className="mobileheading">Ad title*</div>
                        <input type="text" className="data-mobile-input" />
                        <div className="info-input">Mention the feacture of your item(e.g. brand,model,age,type)</div>

                    </div>
                    <div className="mobile-data">
                    <div className="mobileheading">Description*</div>
                    <input type="text" className="data-mobile-input Xcyux" />
                    <div className="info-input">Include condition,features and reason for selling</div>
                    </div>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title">SET A PRICE</div>
                    <div className="mobileheading">Price*</div>
                    <input className="data-mobile-input"></input>
                </section>
                <section className="mobilePost-section"></section>

                <section className="mobilePost-section">
                    <div className="mobilePost-title">CONFIRM YOUR LOCATION</div>
                    <input type="text" className="data-mobile-input" placeholder="     Address"/>
                </section>
                <section className="mobilePost-section">
                    <div className="mobilePost-title">Phone number</div>
                    <input type="text" className="data-mobile-input" />
                </section>
                <section className="mobilePost-section post">
                    {/* <button className=" btn mobilePost-button" onClick={(e)=>{sendRequest}}>Post now</button> */}
                </section>
            </form>
        </div>
    )
}

export default MobilePost;