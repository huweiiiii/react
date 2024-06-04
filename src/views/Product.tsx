import React from "react";
import { useParams } from "react-router-dom"

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (id) return <div>Product {id}</div>
  return <div>No product selected</div>
};

export default Product;
