import React from "react";
import "./../login/login.css";
// import '../../mobile.css'

import {  useNavigate } from "react-router-dom";
import login from "../img/login.png";
import lock from "../img/lock.png";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import hostel from "./../img/hostelhub1.png"


const Register = () => {
  const loading=true;

const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let values = e.target.value;

    setUser({ ...user, [name]: values });
  };
const [load, setLoad] = useState("Register");
  const Postdata = async (e) => {
    // data.status?localStorage.setItem("load","finish");:localStorage.setItem("load","finish");
    //To prevent reload function
    setLoad("Wait");
    e.preventDefault();
    //instead of user.name just write name
    const {name,email,phone,password,cpassword}=user;
// "proxy":"http://localhost:4000",

   const response = await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      // to send data to Data base it has to be in string formate
    //   "name": "pratik",
    // "email": "pratik07@gmail.com",
    // "phone": 8698440584,
    // "password": "done1",
    // "cpassword": "done1" 
    //name:name=>name
    name,email,phone,password,cpassword
    })
   });
   
   const data = await response;
    console.log(data.status);
   if(data.status === 422){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
    setLoad("Register")
   }
   else if(data.status===402){
    window.alert("Please Fill The Data");
    setLoad("Register")

  }else if(data.status===200){
    window.alert("Registration Successfull");
    console.log("Registration Successfull");
    setLoad("Register")


// return <edirect to="/login"/>
navigate("/login")

   }else{
navigate("/contact")

   }
  };

  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="login-box">
        <img src={hostel} className="login-img" alt="" />
        <form className="login-box-left" method="POST">
          <h3>Register</h3>
          <div className="in-line">
            <label htmlFor="name">
              <img src={login} width="20px" alt="" />{" "}
            </label>
            <input
            
              type="text"
              name="name"
              onChange={handleInputs}
              value={user.name}
              autoComplete="off"
              className="done"
              placeholder="Enter Your Full Name"
              required
              />
          </div>
          <div className="in-line">
            <label htmlFor="email">
              <img src={lock} width="20px" alt="" />
            </label>{" "}
            <input
            
              type="email"
              name="email"
              onChange={handleInputs}
              value={user.email}
              autoComplete="off"
              className="done"
              placeholder="Enter Your Gmail"
              required
              />
          </div>
          <div className="in-line">
            <label htmlFor="number">
              <img src={lock} width="20px" alt="" />
            </label>
            <input
            
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              autoComplete="off"
              className="done"
              placeholder="Enter Your Phone No"
              required
              />
          </div>
          <div className="in-line">
            <label htmlFor="password">
              <img src={lock} width="20px" alt="" />
            </label>
            <input
            
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              autoComplete="off"
              className="done"
              placeholder="Enter Your Password"
              required
              />
          </div>
          <div className="in-line">
            <label htmlFor="cpassword">
              <img src={lock} width="20px" alt="" />
            </label>
            <input
            
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              autoComplete="off"
              className="done"
              placeholder="Confirm Password"
              required
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
            onClick={Postdata}
            value={load}
            />
          }
        </form>
        <div className="login-box-right"></div>
      </div>
    </div>
            </>
  );
};

export default Register;
