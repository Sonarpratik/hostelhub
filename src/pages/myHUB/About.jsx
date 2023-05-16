import React from "react";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="container-product">
        <div className="inner-product">
         
          <div className="desc-mark">
            <h1>Pratik <span style={{color:"goldenrod"}}>Sonar</span>  </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ducimus sit perspiciatis magnam sequi nisi architecto dolores
              libero expedita. Nostrum illum ab vitae sunt.
            </p>

            {/* <button className="b-t-n">BUY</button> */}
          </div>
          <img
            src="https://res.cloudinary.com/dufflofli/image/upload/v1684258930/samples/PRODUCTS/pratik_z1rvm0.jpg"
            alt=""
            style={{width:"500px",borderBottomLeftRadius:"360px"}}
          />
        </div>
      </div>
      <div className="container-product">
        <div className="inner-product">
          <img
            src="https://res.cloudinary.com/dufflofli/image/upload/v1684257101/samples/PRODUCTS/IMG_20230516_213543_uha6io.jpg"
            alt=""
            style={{width:"500px",borderBottomRightRadius:"360px"}}
          />
          <div className="desc-mark">
            <h1><span style={{color:"goldenrod"}}>Tanuja</span>  Gadhe</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ducimus sit perspiciatis magnam sequi nisi architecto dolores
              libero expedita. Nostrum illum ab vitae sunt.
            </p>

            {/* <button className="b-t-n">BUY</button> */}
          </div>
        </div>
      </div>
      <div className="container-product">
        <div className="inner-product">
         
          <div className="desc-mark">
            <h1>Ram <span style={{color:"goldenrod"}}>Thakur</span> </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ducimus sit perspiciatis magnam sequi nisi architecto dolores
              libero expedita. Nostrum illum ab vitae sunt.
            </p>

            {/* <button className="b-t-n">BUY</button> */}
          </div>
          <img
            src="https://res.cloudinary.com/dufflofli/image/upload/v1684257078/samples/PRODUCTS/IMG_20230516_212236_t1q3ds.jpg"
            alt=""
            style={{width:"500px",borderBottomLeftRadius:"360px"}}
          />
        </div>
      </div>
      <div className="container-product">
        <div className="inner-product">
          <img
            src="https://res.cloudinary.com/dufflofli/image/upload/v1684257071/samples/PRODUCTS/dipali_cno5nq.jpg"
            alt=""
            style={{width:"500px",borderBottomRightRadius:"360px"}}
          />
          <div className="desc-mark">
            <h1><span style={{color:"goldenrod"}}>Dipali</span>  Raskar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ducimus sit perspiciatis magnam sequi nisi architecto dolores
              libero expedita. Nostrum illum ab vitae sunt.
            </p>

            {/* <button className="b-t-n">BUY</button> */}
          </div>
        </div>
      </div>
      <div className="container-product">
        <div className="inner-product">
         
          <div className="desc-mark">
            <h1>Shreyash <span style={{color:"goldenrod"}}>Munde</span> </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ducimus sit perspiciatis magnam sequi nisi architecto dolores
              libero expedita. Nostrum illum ab vitae sunt.
            </p>

            {/* <button className="b-t-n">BUY</button> */}
          </div>
          <img
            src="https://res.cloudinary.com/dufflofli/image/upload/v1684257065/samples/PRODUCTS/munde_dk5rgq.jpg"
            alt=""
            style={{width:"500px",borderBottomLeftRadius:"360px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
