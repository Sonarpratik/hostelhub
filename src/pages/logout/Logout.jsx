import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./../login/login.css"
// import { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const Logout = () => {

  const navigate = useNavigate();

  //promises
  useEffect(() => {
    fetch("/logout", {
      mode: 'no-cors',
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res)=>{
      localStorage.removeItem("inputvalue")

      navigate("/login");
      if(res.status!==200){
        const error=new Error(res.error);
        throw error;
      }
    }).catch((err)=>{
        console.log(err);
        
    })
  });
  // let [loading, setLoading] = useState(true);
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
