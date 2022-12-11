import * as React from 'react';
import {useContext,useEffect} from 'react';
import Colors from './Colors';


export default function ListOfColors({index,listOfColors,setSource,setImageIndex,setIndexOfPicture,product_data}){
console.log(listOfColors);
const listColor=listOfColors;
console.log(listColor); 
let colorsOf=[];
const[isInStock,setIsInStock]=React.useState(false)
colorsOf=listColor.map((color,index)=><Colors index={index} product_data={product_data} setSource={setSource} setImageIndex={setImageIndex} setIndexOfPicture={setIndexOfPicture} key={index} color={color}/>)
return(
<div>
    {colorsOf}
</div>
)
}