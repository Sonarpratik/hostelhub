import React, { useEffect, useState } from "react";
// import PublicHome from "../components/publichome/PublicHome";
// import Hub from "../components/thehub/Hub";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import { useFetchCanteenQuery } from "../store/AllApi";
import pizza1 from "./css/pizza.jpg";
import coffee2 from "./css/coffee.jpg";
import china3 from "./css/istockphoto-545286388-612x612 (1).jpg";
import mazza from "./css/mazza.jpeg"
import "./home.css"

const Myhub = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [con, setcon] = useState(" ");
  const [value, setValue] = useState("ALL PRODUCTS");

useEffect(() => {
  if(con==="64635eeadee2b5c2aa50b3e9")
      setValue("CAFETERIA")
  if(con===" ")
      setValue("ALL PRODUCTS")
  if(con==="64635e24dee2b5c2aa50b3d3")
      setValue("HUNGERS POINT")
  if(con==="64635eb6dee2b5c2aa50b3e2")
      setValue("VAISHNAVI")
  if(con==="64635deadee2b5c2aa50b3cd")
      setValue("CAFE CORNER")

}, [con]);

const thisfun=(fg)=>{
  navigate(`/product/${fg}`)
}

  useEffect(() => {
    // callAboutPage();

    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        navigate("/login");
        console.log(err);
      });
  }, []);
  const { data: canteen, isLoading: canloading } = useFetchCanteenQuery({
    id:con
  });
console.log(canteen)
const allProducts = canteen?.flatMap(obj => obj.products);
console.log(allProducts)

  console.log([
    ...new Set(
      canteen?.map((item) => item.products?.map((it) => it.product)).flat()
    ),
  ]);
  console.log(canteen?.map((item) => item.canteen_name));
  return (
    <>
      <Navbar />
      <div className="main">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active for-corosal" style={{ background: "black" }} >
              <img
                src={pizza1}
                class="d-block w-100"
                alt="..."
                style={{ opacity: "60%" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{color:"white"}}>WE HAVE AMAZING PIZZA</h3>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" style={{ background: "black" }}>
              <img
                src={china3}
                class="d-block w-100"
                alt="..."
                style={{ opacity: "60%" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{color:"white"}}>NEVER LATE TO HAVE THE FOOD</h3>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" style={{ background: "black" }}>
              <img
                src={coffee2}
                class="d-block w-100"
                alt="..."
                style={{ opacity: "60%" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{color:"white"}}>BEST WAY TO STAY AWAKE</h3>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="con">
        <div className="con-drop">

      <div className="dropdown">
        </div>
          <button
            className="btn btn-secondary dropdown-toggle drop-color"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           {value}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a onClick={()=>{setcon(" ")}} className="dropdown-item" >
              ALL PRODUCTS
              </a>
            </li>
           
            <li>
              <a onClick={()=>{setcon("64635eeadee2b5c2aa50b3e9")}} className="dropdown-item" >
              CAFETERIA
              </a>
            </li>
            <li>
              <a onClick={()=>{setcon("64635e24dee2b5c2aa50b3d3")}} className="dropdown-item" >
              HUNGERS POINT
              </a>
            </li>
            <li>
              <a onClick={()=>{setcon("64635eb6dee2b5c2aa50b3e2")}} className="dropdown-item" >
              VAISHNAVI
              </a>
            </li>
            <li>
              <a onClick={()=>{setcon("64635deadee2b5c2aa50b3cd")}} className="dropdown-item" >
              CAFE CORNER
              </a>
            </li>
           
          </ul>
        </div>
{allProducts?.map((item)=>

      <div class="card" style={{width: "18rem"}}>
        <img src={item.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{item.product}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <p>
            PRICE : <b>{item.price}</b>
          </p>
          <a style={{cursor:"pointer" ,background:"#232a36"}} class="btn btn-primary" onClick={()=>thisfun(item.product)}>
            VIEW
          </a>
        </div>
      </div>
)}
    
      </div>
    </>
  );
};

export default Myhub;
