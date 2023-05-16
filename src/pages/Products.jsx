import React, { useEffect, useState } from "react";
import { useFetchProductQuery } from "../store/AllApi";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();

  const { data: product, isLoading: cproloading } = useFetchProductQuery({
    id: id,
  });
  const [count, setcount] = useState(1);
  useEffect(() => {
  if(count>10){
    setcount(10)
  }
  if(count<1){
    setcount(1)

  }
  }, [count]);
  return (
    <>
      <Navbar />
      <div className="container-product">
        <div className="inner-product">
          <img src={product?.img} alt="" />
          <div>
            <h2>{product?.product}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ducimus sit perspiciatis magnam sequi nisi architecto dolores
              libero expedita. Nostrum illum ab vitae sunt.
            </p>
            <p className="here-this" style={{ fontSize: "20px",display:"flex",width:"100px",justifyContent:"space-between",alignItems:"center" }}>
              <b style={{cursor:"pointer" ,fontSize:"30px"}} onClick={()=>setcount(count-1)}>-</b>
              <b> {count} </b> <b style={{cursor:"pointer" ,fontSize:"30px"}}  onClick={()=>setcount(count+1)}>+</b>
            </p>
            <p>

            <p style={{fontSize:"30px",fontWeight:"lighter"}}>
              RS {product?.price*count}
            </p>
            </p>
            <button className="b-t-n">BUY</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
