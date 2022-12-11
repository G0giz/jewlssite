import * as React from 'react';
import {useContext,useEffect} from 'react';
import '../style/Card.css'
import { UserContext } from '../Context/InfoContextProvider';
import MaterialValueCategory from './MaterialValueCategory';

export default function MaterialList({listOfMaterialsCategory,getDataCategory,setListProps}) {
  // const[listOfProd,setListOfProd]=React.useState(listOfProducts)
  // console.log(listOfProd);
  // console.log(listOfProducts);
  const listOf=listOfMaterialsCategory;
  // console.log(listOfMaterialsCategory);
  // console.log(getDataCategory);
  let list=[];
     list=listOf.map((material,index)=>
     <MaterialValueCategory sendDataCategory={getDataCategory} setList={setListProps} key={index} material_dataCategory={material}/>)
    // console.log(listOf);

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>{list}</div>
  )
}