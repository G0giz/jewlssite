import React, { useContext, useState,useEffect } from "react";
import '../style/Modal.css'

import { RiCloseLine } from "react-icons/ri";
import Close from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UserContext } from "../Context/InfoContextProvider";
import Zoom from 'react-img-zoom'
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

let sum=0
export default function Item({setIsOpen,item,index,InStock}) {
  console.log(index);
  console.log(item);
  console.log(InStock);
  let bool=false
  const matches = useMediaQuery('(min-width:1280px)');
  const[tempItem,setTempItem]=useState(item);  
  const[newItemTemp,setNewItemTemp]=useState([]);
  const[sumOfPay,setSumOfPay]=useState(0);
    const [myOption, setMyOption] = useState("בחירת קוטר");
    const[Amount,setAmount]=useState(1)
    const[TotalPriceCard,setTotalPriceCard]=useState(item.price)
    const{cartList, setCartList,setFilterList,TotalPrice,setTotalPrice,indexOfPicture,outOfStock,setOutOfStock}=useContext(UserContext)

     const handleChange = (event) => {
         setMyOption(event.target.value)
       }
           const product=item
           console.log(item);
           console.log(product);


       const Close=()=>{
           item.pop()
           setIsOpen(false)
       }

const RiseAmount=()=>{
  
  axios.get('https://nodevercel-dusky.vercel.app/'+item._id)
  .then(res=>setNewItemTemp(res.data));

   if(item.amountColors[index]===0)
   {
   }
   else
   {
   if(item.amount[index]>item.amountColors[index])
   {
    
   }
   else

  {   
    item.amount[index]=item.amount[index]+1
    setTotalPriceCard(TotalPriceCard+item.price*item.amount[index])
  }
  }
  item.amountColors[index]-=1
  
}

const LowAmount=()=>{

  item.amount[index]=item.amount[index]-1
  setTotalPriceCard(TotalPriceCard-item.price*item.amount[index])
}
//    useEffect(() => {
    
//      setAmount(1)


//  }, [Amount]);

const AddToCart=(tempItem)=>{
  debugger
  axios.get('http://localhost:5000/items/'+tempItem.name)
  .then(response=>{
    console.log(response.data)
  })
  .catch((err)=>{
    console.log(err);
  })
  console.log(tempItem);
  console.log(cartList);
  let imgString=tempItem.img[indexOfPicture]
  tempItem.img.map(itemOFAdd=>{
    console.log(itemOFAdd);
   cartList.map(itemOf=>{
    if(itemOf.img===imgString)
    {
      
      bool=true
    }
   })
  }  
  )
  if(!bool)
  {
    debugger
    let newItem={id:tempItem.id,amount:tempItem.amount[indexOfPicture],color:tempItem.colors[indexOfPicture],img:tempItem.img[index],name:tempItem.name,price:tempItem.price,total_price:tempItem.price*tempItem.amount[indexOfPicture],amountColors:tempItem.amountColors}
      sum+=tempItem.total_price
      console.log(sum);
      axios.post('https://nodevercel-dusky.vercel.app/add',newItem)
      .then(res=>console.log(res.data));
      console.log("Price:"+tempItem.price*tempItem.amount[index])
      item.total_price=tempItem.price*tempItem.amount[index]
      setTotalPrice(()=>TotalPrice+tempItem.total_price)
      setCartList([...cartList,newItem])
      console.log(cartList);
      console.log(TotalPriceCard);
      setIsOpen(false)
  }
  // let bool =cartList.includes(imgString)
  // let newItem={id:tempItem.id,amount:tempItem.amount[indexOfPicture],color:tempItem.colors[indexOfPicture],img:tempItem.img[index],name:tempItem.name,price:tempItem.price,total_price:tempItem.price*tempItem.amount[indexOfPicture]}
  // console.log(newItem);
  // console.log(bool);
  // if(bool==false)
  // {
  //   sum+=tempItem.total_price
  //   console.log(sum);
  //   console.log("Price:"+tempItem.price*tempItem.amount[index])
  //   item.total_price=tempItem.price*tempItem.amount[index]
  //   setTotalPrice(()=>TotalPrice+tempItem.total_price)
  //   setCartList([...cartList,newItem])
  //   console.log(cartList);
  //   console.log(TotalPriceCard);
  //   setIsOpen(false)
  // }
}


return (
<>
<div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
            <div className="imageZoomLarge" style={{height:'35%',display:'flex',justifyContent:'center',alignItems:'center'}}>
               {matches===true?
               <Zoom
       img={tempItem.img[index]}
       zoomScale={1.1}
       width={222}
       height={181}
       transitionTime={0.5}
       
    
    />
   :
   <img className="heading" src={tempItem.img[index]}/>}
               
            </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)} >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <div className="StyleOfNameAndPrice">
            <p>{tempItem.name}</p>
            <p>{tempItem.price}₪</p>
            </div>
            <p style={{margin:'0px',display: 'flex',flexDirection: 'row-reverse',justifyContent:'space-evenly'}}>
              {tempItem.cat.map((category,index)=>{
              return <p key={index}>{category}</p>
            })}</p>
            <p style={{margin:'0px',display: 'flex',flexDirection: 'row-reverse',justifyContent:'space-evenly'}}>
              {tempItem.materials.map((material,index)=>{
              return <p key={index}>{material}</p>
            })}</p> 
             <Divider sx={{ mb: 2 }} />
            <div className="MaterialDetails">
            <p className="pOfMatrial">חומר:{tempItem.materials}</p>
            </div>
            {tempItem.size.map((item)=>{
              
              if(item.size===[])
              {
                return;
              }
              else
              {
                <form className="FormStyle">
                    <select className="ChoodeSize" value={myOption} onChange={handleChange}>
                    <option value="choose">בחירת קוטר</option>
                        {tempItem.size.map((sizeOf,index)=>{
                          return<option key={index} value={sizeOf}>{sizeOf}</option>
                        })}
                    </select>
             </form>
              }
            })}
            {/* return<option key={index} value={sizeOf}>{sizeOf}</option> */}
            {/* <form className="FormStyle">
                    <select className="ChoodeSize" value={myOption} onChange={handleChange}>
                    <option value="choose">בחירת קוטר</option>
                        {tempItem.size.map((sizeOf,index)=>{
                          return<option key={index} value={sizeOf}>{sizeOf}</option>
                        })}
                    </select>
             </form> */}
             <div>
             <div className="InputAmount">
              <div onClick={()=>RiseAmount()}>
            <AddIcon style={{cursor:'pointer'}}  fontSize="small"/>
            </div>
            <p>{item.amount[index]}</p>
            <div onClick={()=>LowAmount()}>
            <RemoveIcon style={{cursor:'pointer'}} fontSize="small"/>
            </div>
             </div>
             <div className="TotalPrice">
                {item.price*item.amount[index]}₪
             </div>
             <Button onClick={()=>AddToCart(item)} style={{width: '73%',height: '6vh'}} variant="contained">הוספה לסל</Button>
             </div>
          </div>
        </div>
      </div>

</>  )
}
