import React, { } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import himg from "./../../pages/img/hostelhubblack.png"

const Navbar = () => {

  return (
    <div  className="nav-bg">
      
      {/* navbar navbar-expand-lg bg-light */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bg">
        <div className="container-fluid make-it">
          <Link className="navbar-brand" to="/">
            {/* <img width="100%" height="40px" src={himg} alt="" /> */}
            <h3 className="bold-400">

            HOSTEL <span className="theme-color ">HUB</span>
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-makeit-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="makeit-flex-nav">

              <li className="nav-item">
                <Link
                  className="nav-link active color-w "
                  aria-current="page"
                  to="/"
                  >
                <div className="material-symbols-outlined pr-10">
home
                </div>
                 
              HOME
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link color-w" to="/goto">
                  <div className="material-symbols-outlined pr-10">
group
                  </div>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link color-w" to="/thehub">
                <div className="material-symbols-outlined pr-10">
rocket_launch
                  </div>
                  THE HUB
                </Link>
              </li>
                  </div>
                  <div className="color-w makeit-flex-nav">
                    {localStorage.getItem("inputvalue")==="donea"?<li className="nav-item">
                  <Link className="nav-link color-w" to="/logout">
                <div className="material-symbols-outlined pr-10">
                LOGOUT
                  </div>
                  LOGOUT
                </Link>   </li>
                :
                <>
                <li className="nav-item">
                  <Link className="nav-link color-w" to="/login">
                <div className="material-symbols-outlined pr-10">
                LOGIN
                  </div>
                  LOGIN
                </Link>   </li>
                <li className="nav-item">
                <Link className="nav-link color-w" to="/register">
              <div className="material-symbols-outlined pr-10">
           person
                </div>
               REGISTER
              </Link>
              </li>
                </>
              }
                  
                
               
                
                  </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
