/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react';
import axios from 'axios'
import { setProducts} from '../redux/action/productAction'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';

function ProductListing() {
    const dispatch=useDispatch()
     useEffect(() => {
        const fetchProducts=async ()=>{
            const response =await axios.get("https://fakestoreapi.com/products").catch((err)=>{
                console.log(err)
            })
            dispatch(setProducts(response.data))
          
           }
         fetchProducts()

     }, [dispatch])
    return (
     <div className="ui grid container"  >
    <ProductComponent/>     
    </div>
    )

}

export default ProductListing


