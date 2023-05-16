import React from "react";
import { useFetchProductQuery } from "../store/AllApi";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();

  const { data: product, isLoading: cproloading } = useFetchProductQuery({
    id: id,
  });

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

            <button className="b-t-n">BUY</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
