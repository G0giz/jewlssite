import * as React from 'react';
import '../style/Card.css'
import Zoom from 'react-img-zoom'
import {useContext,useEffect} from 'react';

export default function ZoomItem({item,index}) {
    
    const[image,setImage]=React.useState(item[index]);
    const[indexOfItem,setIndexOfItem]=React.useState(0);
    const[indexImage,setIndexImage]=React.useState(index);

    // console.log(image);
    // useEffect(() => {
    //      setImage(item[indexOfItem])
    //      console.log(image);
    // }, [image]);
 
    

  return (
    <div>
    <Zoom
       img={image}
       zoomScale={3}
       width={222}
       height={181}
       transitionTime={0.5}
    
    />
    </div>
  )
}
