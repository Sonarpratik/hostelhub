import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./../login/login.css"
// import { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios"



const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
 
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      console.log(res);
  localStorage.removeItem("inputvalue","donea");
    
  navigate("/")
   
    }).catch((err)=>{
      console.log(err);
    })
  });
  const loading =true;
  
  return <div>
    <Navbar/>
<div className="main logouts">

    
    <ClimbingBoxLoader
        color={"goldenrod"}
        loading={loading}
        size={30}
        
        />
        </div>
    </div>;
};

export default Logout;
