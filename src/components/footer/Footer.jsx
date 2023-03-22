import React from 'react';
import { Link } from 'react-router-dom';

import "./footer.css"
import "./../navbar/navbar.css"

const Footer = () => {
    return (
        <div >
         
            <div className="footer-container">
            <Link className="navbar-brand" to="/">
            {/* <img width="100%" height="40px" src={himg} alt="" /> */}
            <h3 className="bold-400">

            HOSTEL <span className="theme-color ">HUB</span>
            </h3>
          </Link> <br />
<h3>

            TO Make Your Life Easy
</h3>
<p className='para-opa'> copyright © 2023 HostelHUB , Inc</p>

<h6>Legal Stuff  |  Security  |  Privacy Policy</h6>
            </div>
        </div>
    );
}

export default Footer;
