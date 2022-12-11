import * as React from 'react';
import {useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UserContext } from '../Context/InfoContextProvider';
import '../style/Card.css'
import Modal from '../Modals/Item';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListOfColors from '../components/ListOfColors';
// import Zoom from 'react-img-zoom'
// import ZoomItem from './ZoomItem';


export default function ProductCard({product_data,inStock,setInStock}) {
    const listOfColors = product_data.colors
    console.log(inStock);
    let image=product_data.img[0];
    const matches = useMediaQuery('(min-width:1280px)');
    const[imgIndex,setImageIndex]=React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const[selectedImage,setSelectedImage]=React.useState(0);
    const[source,setSource]=React.useState(image);
    const{productList,setProductList,itemPopUp,setItemPopUp,cartList,filterList,setFilterList,first,setFirst,
          indexOfPicture,setIndexOfPicture,outOfStock,setOutOfStock}=useContext(UserContext)
    // const source=product_data.img
      console.log(outOfStock);
      console.log(product_data.amountColors[indexOfPicture]);

    const itemOf=(product_data)=>{
      
      // console.log(product_data);
        setItemPopUp(product_data)
        setSelectedImage(product_data.id)
        setIsOpen(true)
        // console.log(product_data);
      //  {isOpen && <Modal setIsOpen={setIsOpen} item={product_data}/>}
        // console.log(itemPopUp);
      }

      const handleClick = (index) => {
        // 👇️ refers to the image element
        //  console.log(index);
         setSource(product_data.img[index])
         setImageIndex(index)
         setIndexOfPicture(()=>index)
         console.log(indexOfPicture);
        //  console.log(indexOfPicture);
        //  console.log('Image clicked'+source);
      }

         useEffect(() => {
        
        //  console.log(source);  
         setSource(product_data.img[0])
         
          if(product_data.amountColors[indexOfPicture]===0)
          {
            setInStock(!inStock)
          }
       }, [product_data]);


  return (

    <div className='CardsResponsive' style={{width: '171px'}}>
            <li className='LiCardHeight' style={{padding:'0',height:'100%'}}>
                              {isOpen && <Modal setIsOpen={setIsOpen} item={itemPopUp} index={imgIndex}/>}
                <Card className='CardHeight' style={{width:'100%',height:'100%'}} sx={{ minWidth: 275 }}>
                  <CardContent style={{}}>
                    <div onClick={() => {itemOf(product_data)}} style={{    height: '20vh',display: 'flex',justifyContent: 'center'}}>
                      {/* {matches===true?
                    //  <ZoomItem item={source} index={imgIndex}/>
                    //   :
                  } */}

                      <img className='imagCard'  style={{height: '123px',cursor:'pointer'}}  src={source}/>
                    </div>
                    <div className='divCard' >
                    <Typography variant="body2">
                      {product_data.name}
                    </Typography>
                    <Typography variant="body2">
                      {product_data.price}₪
                    </Typography>
                    <div className='DivColors'>
                      <ListOfColors product_data={product_data} setSource={setSource} setImageIndex={setImageIndex} setIndexOfPicture={setIndexOfPicture} listOfColors={listOfColors} index={indexOfPicture}/>
                     {/* {
                        listOfColors?.map((itemOf,index)=>{
                          return<button key={index} className='RadioButton' style={{backgroundColor:itemOf,cursor:'pointer'}} onClick={()=>handleClick(index)}></button>
                        })

                      } */}
                    </div>
                    </div>
                  </CardContent>
                </Card>
                </li>
                </div>
      )
}
