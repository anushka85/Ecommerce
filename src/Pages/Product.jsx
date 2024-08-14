import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Comonents/Breadcrum/Breadcrum";
import ProductDisplay from "../Comonents/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Comonents/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Comonents/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return <div>
    <Breadcrum product = {product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedProducts/>
  </div>;
};

export default Product;