import React ,{useState} from "react";
import Navbar from "./../../../components/navbar/Navbar";
import "./rooms.css";
const Rooms = () => {
  const [cat, setcat] = useState("ALL");
  const [con, setcon] = useState("ALL");
  return (
    <>
      <Navbar />

      <div className=" rooms-bg">
        <div className="for-drop">
        <div className="input-group mb-3">
  <span className="input-group-text material-symbols-outlined" id="basic-addon1">search</span>
  <input type="text" className="form-control" placeholder="SEARCH HOSTEL NAME" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle drop-color"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           {con}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a onClick={()=>{setcon("ALL")}} className="dropdown-item" href="/">
              ALL
              </a>
            </li>
           
            <li>
              <a onClick={()=>{setcon("ATTACH TOILET")}} className="dropdown-item" href="/">
              ATTACH TOILET 
              </a>
            </li>
            <li>
              <a onClick={()=>{setcon("SEPARATE TOILET")}} className="dropdown-item" href="/">
              SEPARATE TOILET
              </a>
            </li>
           
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle drop-color"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           {cat}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a onClick={()=>{setcat("ALL")}} className="dropdown-item" href="/">
              ALL
              </a>
            </li>
            <li>
              <a onClick={()=>{setcat("2BHK")}} className="dropdown-item" href="#">
              2BHK
              </a>
            </li>
            <li>
              <a onClick={()=>{setcat("1BHK")}} className="dropdown-item" href="/">
              1BHK 
              </a>
            </li>
            <li>
              <a onClick={()=>{setcat("1RHK")}} className="dropdown-item" href="/">
                1RHK
              </a>
            </li>
            <li>
              <a onClick={()=>{setcat("1ROOM")}} className="dropdown-item" href="/">
                1ROOM
              </a>
            </li>
          </ul>
        </div>

        </div>
        <div>
          {/* <input className="rangess" type="range" /> */}
        </div>
        <div className="rooms-component">
          <div className="rooms-item">
            <div className="room-one">
              <img
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/34/42/344296_v1.jpeg"
                alt=""
              />
            </div>
            <div className="room-two">
              <h4>HOTEL RAMA</h4>
              <span className="rooms-star">8.4 star</span>
            </div>
            <div className="room-three">
              <div className="three-item">
                <h5>Price</h5>
                <div className="small-three">
                  <div className="smallest-three">
                    <h3>100 RS</h3>
                    <p>for one month</p>
                  </div>
                  <button>View Details</button>
                </div>
              </div>
              <div className="grey-three-room">
                you can view our <span className="bold-90">see more pic</span>
              </div>
            </div>
            <div className="room-four">four</div>
          </div>
          <div className="rooms-item">
            <div className="room-one">
              <img
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/34/42/344296_v1.jpeg"
                alt=""
              />
            </div>
            <div className="room-two">
              <h4>HOTEL RAMA</h4>
              <span className="rooms-star">8.4 star</span>
            </div>
            <div className="room-three">
              <div className="three-item">
                <h5>Price</h5>
                <div className="small-three">
                  <div className="smallest-three">
                    <h3>100 RS</h3>
                    <p>for one month</p>
                  </div>
                  <button>View Details</button>
                </div>
              </div>
              <div className="grey-three-room">
                you can view our <span className="bold-90">see more pic</span>
              </div>
            </div>
            <div className="room-four">four</div>
          </div>
          <div className="rooms-item">
            <div className="room-one">
              <img
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/34/42/344296_v1.jpeg"
                alt=""
              />
            </div>
            <div className="room-two">
              <h4>HOTEL RAMA</h4>
              <span className="rooms-star">8.4 star</span>
            </div>
            <div className="room-three">
              <div className="three-item">
                <h5>Price</h5>
                <div className="small-three">
                  <div className="smallest-three">
                    <h3>100 RS</h3>
                    <p>for one month</p>
                  </div>
                  <button>View Details</button>
                </div>
              </div>
              <div className="grey-three-room">
                you can view our <span className="bold-90">see more pic</span>
              </div>
            </div>
            <div className="room-four">four</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
