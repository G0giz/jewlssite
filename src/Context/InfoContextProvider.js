import {  createContext } from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import products from "../components/Products";
import cart from "../components/CartList";
import category from "../components/Category";
import axios from "axios";

export const UserContext = createContext();

export default function InfoContextProvider({children}) {
  const [productList, setProductList] = useState([])

   const getData=()=>{
     axios.get('https://nodevercel-dusky.vercel.app/')
     .then(result=>{
     setProductList(result.data)
 })
 .catch((error)=>{
 console.log(error);
 })
   }

  useEffect(()=>{
    getData();
  },[])

    const[indexOfPicture,setIndexOfPicture]=useState(0)
    const[first,setFirst]=useState(false)
    const[outOfStock,setOutOfStock]=useState(false)
    const [cartList, setCartList] = useState(cart)
    const[itemPopUp,setItemPopUp]=useState(null)
    const[TotalPrice,setTotalPrice]=useState(0)
    const[sumOfPrice,setSumOfPrice]=useState(0)
    const[filterList,setFilterList]=useState([])
    const[materials,setMaterials]=React.useState([]);
    const[categoryList,setCategoryList]=React.useState([]);
    const[tempArray,setTempArray]=React.useState([]);
  return (
    <UserContext.Provider value={{productList,setProductList,first,setFirst,cartList, setCartList,itemPopUp,setItemPopUp,TotalPrice,setTotalPrice,filterList,setFilterList,
      materials,setMaterials,categoryList,setCategoryList,indexOfPicture,setIndexOfPicture,sumOfPrice,setSumOfPrice,tempArray,setTempArray,outOfStock,setOutOfStock}}>
        {children}
    </UserContext.Provider>)
}
