import React from "react";
import "./login.css";
// import logo from "../images/in.png";
import login from "../img/login.png";
import lock from "../img/lock.png";
import { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import hostel from "./../img/hostelhub1.png"
import axios from "axios";





function Login() {
    const navigate = useNavigate();
  const [username, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState("");
  const [load, setLoad] = useState("Login");
const loading=true;



const loginf = async () => {
setLoad("Wait")

try {

  const res =await axios({
    method: "POST",
    data: {
      username: username,
      password: password,
    },
    withCredentials: true,
    url: "http://localhost:4000/login",
  })

  console.log(res)
  localStorage.setItem("inputvalue","donea");
  navigate("/")
} catch (error) {
  window.alert("Wrong Crendintials")
  console.log(error)
setLoad("Login")

}

 
};


useEffect(() => {
 

  axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:4000/login",
  }).then((res) => {
    // setData(res.data);
    setdata(res.status)
    console.log(res.status);
 
  }).catch((err)=>{
    console.log(err);
navigate("/")
  })
}, []);



  return (
    <div>
    <Navbar/>

      {data===200?
    <form className="login">

<div className="login-box">
      <img src={hostel} className="login-img" alt="" />

        <div className="login-box-left" >
          <h3>Sign In</h3>
          <div className="in-line">
            {" "}
            <label htmlFor="name">
              <img src={login} width="20px" alt="" />
            </label>{" "}
            <input
              autoComplete="off"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              className="done"
              type="email"
              placeholder="Enter Your Email"
              required={true}
              />
          </div>
          <div className="in-line">
            <label htmlFor="password">
              {" "}
              <img src={lock} width="20px" alt="" />{" "}
            </label>
            <input
              required={true}
              
              autoComplete="off"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="done"
              type="password"
              placeholder="Enter Your Password"
              />
          </div>
          {
            load==="Wait"?  <span className="btn-login">

              <BeatLoader
            color={"goldenrod"}
            loading={loading}
            size={10}
            
            />
            </span>
            : <input
            type="submit"
            name="signin"
            id="signin"
            className="btn-login"
            onClick={loginf}
            value={load}
            />
          }
         
        </div>
        <div className="login-box-right"></div>
      </div>
    </form>
      :<p className="loading"> <ClimbingBoxLoader
      color={"goldenrod"}
      loading={loading}
      size={30}
      
      /></p>}
    </div>
    );
    
  }
  export default Login;
  