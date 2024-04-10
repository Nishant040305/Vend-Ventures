import React from "react";
import "./mobilePost.css";
import {useNavigate,useLocation} from "react-router-dom";
const Field =(props)=>{
    let {state} = useLocation();
    const navigate = useNavigate();
    const post = (link)=>{
        navigate(`/post/${link}`,{state:state});
    }
    return(
        <section className="field-form mobilePost-section" onClick={(e)=>{post(props.link)}}>{props.name}</section>
    )
}
const fieldArray = [
    {
        name:"Mobile Phones",
        link:"mobile",
    },
    {
        name:"Automobiles/Cars",
        link:"car",
    },
    {
        name:"Real state",
        link:"realstate",
    },
    {
        name:"Electronic Appliances",
        link:"electronics",
    },
    {
        name:"Automobiles/Motor Cycle",
        link:"motorcycle"
    }
]
const Form =()=>{
    
    return(
        <div className="form" style={{display:"flex",flexDirection:"row", justifyContent:"space-around"}}>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-around"}}>
                <div className="mobilePost-title head" >POST YOUR AD</div>
                        <section className="categories-form">
                        {fieldArray.map((field, index) => (<Field name={field.name} link={field.link}/>))}
                        </section>
                    </div>
                        

        </div>
    )
}

export default Form;
//Mobile Phones
// Cars
// motor cycles
// House
// TVs
// Land &plots
{/* <span className="_1Ning"> Jobs </span><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-UJ1uk" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg></li><li data-aut-id="item" className="_1NzQs"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-UJ1uk" d="M674.657 245.333l47.813 129.715 23.448-51.706h51.11l26.563 33.51v80.171h-78.406l26.746 72.064h9.892c75.576 0 136.843 60.253 136.843 134.579s-61.267 134.579-136.843 134.579c-59.691-0.227-112.346-38.479-130.112-94.523s3.455-116.947 52.44-150.495v0l2.931-1.982-28.578-78.189-77.49 225.74h-167.070v3.243c-19.579 65.476-85.893 106.172-154.3 94.693s-117.248-71.498-113.643-139.654c3.605-68.156 58.515-122.867 127.764-127.303s130.911 42.808 143.476 109.928v0 3.783h122.554l22.716-66.839h-121.455l-61.735-80.171h-197.662l-58.071 132.598-36.638 9.008-21.616-28.826 69.796-168.089h228.255l64.849-62.696h196.197l-16.304-44.319h-89.763v-68.821h136.294zM796.845 577.368l25.463 69.362-20.884 31.888-43.233-6.306-26.746-75.307-5.129 6.846v0.54c-17.559 23.523-17.878 55.449-0.79 79.306s47.76 34.314 76.196 25.976c28.435-8.338 48.277-33.608 49.289-62.772s-17.032-55.706-44.823-65.931v0l-9.343-3.603zM365.248 616.823c-12.157-27.922-41.767-44.432-72.372-40.354s-54.681 27.74-58.847 57.836c-4.166 30.096 12.603 59.227 40.986 71.201s61.403 3.848 80.707-19.861v0l5.862-7.387-85 0.18v-57.111l29.86-18.016 30.41 19.818h31.142zM627.943 413.233h-153.88l-31.142 33.568 32.791 46.432h128.233l23.998-80zM318.667 345.333v66.667h-133.333v-66.667h133.333z"></path></svg> */}