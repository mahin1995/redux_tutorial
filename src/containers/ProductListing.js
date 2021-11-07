/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {  fetchProducts } from "../redux/action/productAction";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";

function ProductListing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
