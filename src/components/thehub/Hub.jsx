import React from 'react';
import {Link} from "react-router-dom";
import "./hub.css"


const Hub = () => {
    return (
        <div>
             
             <div className="home-container">
                <div className="home-item logo1">
                <Link to={"/thehub/food"}>
                    <div className='item-content'>
                        <h1>FOOD</h1>
                    </div>
                </Link>
                </div>
                <div className="home-item logo2">
                <Link to={"/thehub/rooms"} >

                    <div className='item-content'>
                        <h1>HOSTEL</h1>
                    </div>
                    </Link>
                </div>
                <div className="home-item logo3">
                <Link to={"/"}>

                    <div className='item-content'>
                        <h1>LAUNDRY</h1>
                    </div>
                    </Link>
                </div>
                <div className="home-item logo4">
                <Link to={"/"}>

                    <div className='item-content'>
                        <h1>TRANSPORT</h1>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hub;
