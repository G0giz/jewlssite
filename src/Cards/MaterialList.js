import * as React from 'react';
import {useContext,useEffect} from 'react';
import '../style/Card.css'
import { UserContext } from '../Context/InfoContextProvider';
import MaterialValue from './MaterialValue';

export default function MaterialList({listOfMaterials,getData,setListProps}) {
  // const[listOfProd,setListOfProd]=React.useState(listOfProducts)
  // console.log(listOfProd);
  // console.log(listOfProducts);
  console.log(getData);
  const listOf=listOfMaterials;
  console.log(listOfMaterials);
  let list=[];
     list=listOf.map((material,index)=>
     <MaterialValue sendData={getData} setList={setListProps} key={index} material_data={material}/>)
    console.log(listOf);

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>{list}</div>
  )
}