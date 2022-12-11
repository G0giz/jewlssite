import * as React from 'react';
import {useContext,useEffect} from 'react';

export default function Colors({color,setSource,setImageIndex,setIndexOfPicture,product_data,index}){
console.log(product_data.amountColors[index]);
    const handleClick = (index) => {
        // 👇️ refers to the image element
        //  console.log(index);
         setSource(product_data.img[index])
         setImageIndex(index)
         setIndexOfPicture(()=>index)
        //  console.log(indexOfPicture);
        //  console.log('Image clicked'+source);
      }

    return(
        <button disabled={product_data.amountColors[index]===0?true:false} className='RadioButton' style={{backgroundColor:color,cursor:'pointer'}} onClick={()=>handleClick(index)}></button>
    )
}