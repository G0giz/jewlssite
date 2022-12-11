import * as React from 'react';
import {useContext,useEffect} from 'react';
import '../style/Card.css'
import { UserContext } from '../Context/InfoContextProvider';
import ProductCard from './ProductCard';
import {slice} from 'lodash'
let render=false;

export default function ProductList({index,listOfProducts,inStock,setInStock}) {
  // const[listOfProd,setListOfProd]=React.useState(listOfProducts)
  // console.log(listOfProd);
  // console.log(listOfProducts);
  
  const listOf=listOfProducts;
  const imagePerRow=index;
  
  let test=[]
  const initialProducts=slice(listOf,0,index)

  test=initialProducts.map((product,index)=>
<ProductCard imagePerRow={imagePerRow} inStock={inStock} setInStock={setInStock} key={index} product_data={product}/>)
 console.log(test);

  console.log(listOfProducts);
  let list=[];
     list=listOf.map((product,index)=><ProductCard imagePerRow={imagePerRow} inStock={inStock} setInStock={setInStock} key={index} product_data={product}/>)
     console.log(list);
    console.log(listOf);

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>{test}</div>
  )
}
