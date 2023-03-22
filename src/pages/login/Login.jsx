import React from "react";
import "./login.css";
// import logo from "../images/in.png";
import login from "../img/login.png";
import lock from "../img/lock.png";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import hostel from "./../img/hostelhub1.png"





const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [load, setLoad] = useState("Login");
const loading=true;
  const loginUser = async (e) => {
    setLoad("Wait")
    e.preventDefault();

    const response = await fetch("https://userbackend.sonarpratik.repl.co/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data =await response;
        if(data.status===404){
            window.alert("Invalid Credentials")
    setLoad("Login")

        }else if(data.status===201){
          localStorage.setItem("inputvalue","donea");
                window.alert("Login SuccessFull");
    setLoad("Login")

navigate("/")

        }else{
            window.alert("lock Down Procedure Exit The page Fast")
    setLoad("Login")

        }
};
  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="login-box">
      <img src={hostel} className="login-img" alt="" />

        <form className="login-box-left" method="POST">
          <h3>Sign In</h3>
          <div className="in-line">
            {" "}
            <label htmlFor="name">
              <img src={login} width="20px" alt="" />
            </label>{" "}
            <input
              autoComplete="off"
              value={email}
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
            onClick={loginUser}
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

export default Login;
