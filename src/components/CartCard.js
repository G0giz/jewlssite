import * as React from 'react';
import {useContext,useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { FaMinus, FaPlus, FaPlusCircle, FaShoppingBag } from 'react-icons/fa';
import { UserContext } from '../Context/InfoContextProvider';
import { Card, CardContent, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import '../style/CartList.css'
import { border, borderRadius, height } from '@mui/system';
import axios from 'axios';

let first=true
export default function Cart({item,index}) {
  console.log(item);
  console.log(index);
  
  const{productList,cartList, setCartList,TotalPrice,setTotalPrice,indexOfPicture}=useContext(UserContext)
  const[TotalPriceOfCart,setTotalPriceOfCart]=React.useState(item.amount*item.total_price)
  const[amountOfProduct,setAmountOfProduct]=React.useState(item.amount)
  const[totalPriceOfProduct,setTotalPriceOfProduct]=React.useState(item.total_price)


  const RiseAmount=(item,index)=>{
    debugger
    console.log(index);
    // item.amount+=1
    // let amountOf=item.amount
    // item.total_price=item.price*item.amount
    // let totalOf=item.total_price
    if(item.amount>=item.amountColors[index])
    {
      return;
    }
    else
    {
    item.amountColors[index]-=1
    item.amount+=1
    item.total_price+=item.price
    setAmountOfProduct(()=>item.amount)
    // console.log(amountOfProduct);
    // console.log(TotalPrice);
    setTotalPrice(()=>TotalPrice+item.price)
    setTotalPriceOfProduct(()=>item.price*item.amount)
    // console.log(totalPriceOfProduct);
    }
  }


const LowAnount=(item,index)=>{
  debugger
  item.amount-=1
  console.log(item);
  console.log(item.amountColors[index]);
  item.amountColors[index]+=1
  console.log(item.amountColors[index]);
  if(item.amount===0)
  {
    debugger
    let array=cartList.filter(itemOf=>itemOf.amount>0)
    setCartList(()=>array)
    setTotalPrice(()=>TotalPrice-item.price)
    console.log(productList);
    let newArray=productList.filter(item=>item.amountColors.filter(amount=>amount>0))
    console.log(newArray);
    let arrytemp=productList.filter(itemOf=>itemOf.amount>0)
    console.log(arrytemp);
    localStorage.setItem('items',JSON.stringify(arrytemp))
    // console.log(array);
  }
  else
  {
    item.total_price-=item.price
  setAmountOfProduct(()=>item.amount)
  // console.log(amountOfProduct);
  setTotalPrice(()=>TotalPrice-item.price)
  setTotalPriceOfProduct(()=>item.price*item.amount)
  // console.log(totalPriceOfProduct);
  }
}


const DeleteProductFromList=()=>{
  let listAfterDelete=cartList.filter(itemToDelete=>
    itemToDelete.id!=item.id
  )
  setCartList(()=>listAfterDelete)
  setTotalPrice(()=>TotalPrice-item.total_price)

}
  return (
    <div>
     <ListItem disablePadding>
            {/* {console.log(item)} */}
        <Card style={{width:'87%',marginBottom:'32px'}} sx={{ minWidth: 275 }}>
        <CardContent style={{height: '133px',display:'flex',flexDirection:'row-reverse',padding:'0'}}>
          <Typography className='imageCartCard' variant="h5" component="div">
            <img style={{width:'100%',height:'100%'}} src={item.img}/>
          </Typography>
          <div style={{display: 'flex',flexDirection: 'column',width: '100%',alignItems: 'flex-end',justifyContent:'space-between'}}>
            <div style={{display:'flex',width:'96%',flexDirection:'row-reverse',justifyContent:'space-between'}}>
              <Typography style={{fontSize: '13px',fontWeight: 'bold'}} variant="body2">
                {item.name}
              </Typography>
              <ClearIcon  onClick={()=>DeleteProductFromList(item)} style={{width:'6%',height: '74%',border: '1px solid',borderRadius: '113%',cursor:'pointer'}}/>
            </div>
            <div style={{display: 'flex',flexDirection: 'row-reverse',alignItems:'center',width: '100%'}}>
              <FaPlus style={{cursor:'pointer'}} onClick={()=>RiseAmount(item,index)}/>
            <Typography style={{padding: '8px',fontSize: '16px'}} variant="body2">
              {amountOfProduct}
            </Typography>
            <FaMinus  style={{cursor:'pointer'}} onClick={()=>LowAnount(item)}/>
              <div style={{width: '100%'}}>
              <Typography style={{padding: '8px',fontSize: '16px'}} variant="body2">
                {item.total_price}₪
              </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
          </ListItem>
    </div>
  );
}