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
import CartCard from './CartCard'
import { Navigate, useNavigate } from 'react-router-dom'

let flag=true;
export default function Cart({ChangeIsShown}) {
  const navigate = useNavigate()

  let totalValues=0;
  const{cartList, setCartList,TotalPrice,setTotalPrice,indexOfPicture,sumOfPrice,setSumOfPrice}=useContext(UserContext)
  const[TotalPriceOfCart,setTotalPriceOfCart]=React.useState(0)
  const[amountOfProduct,setAmountOfProduct]=React.useState(1)
  const[totalPriceOfProduct,setTotalPriceOfProduct]=React.useState(0)


  const [state, setState] = React.useState({
    left: ChangeIsShown,
  });

  const RiseAmount=(item,index)=>{
    debugger
    // item.amount+=1
    // let amountOf=item.amount
    // item.total_price=item.price*item.amount
    // let totalOf=item.total_price
    setAmountOfProduct(()=>item.amount+=1)
    // console.log(amountOfProduct);
    setTotalPriceOfProduct(()=>item.price*item.amount)
    // console.log(totalPriceOfProduct);
  }

    useEffect(() => {
      if(flag)
      {
          cartList.map((item)=>{
           totalValues+=item.total_price
           setTotalPrice(()=>totalValues)
          //  console.log(TotalPrice);
          })
          flag=false
        }
        }, []);


const MoveToPayment=()=>{
  navigate('CheckOutForm')

}
  const toggleDrawerfinal = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawerfinal(anchor, false)}
      // onKeyDown={toggleDrawerfinal(anchor, false)}
    >
      <List style={{height: '66%'}}>
        {cartList.map((item, index) => (
          <CartCard key={index} item={item} index={index}/>
      //     <ListItem key={index} disablePadding>
      //       {console.log(item)}
      //   <Card style={{width:'87%',marginBottom:'32px'}} sx={{ minWidth: 275 }}>
      //   <CardContent style={{height: '133px',display:'flex',flexDirection:'row-reverse',padding:'0'}}>
      //     <Typography className='imageCartCard' variant="h5" component="div">
      //       <img style={{width:'100%',height:'100%'}} src={item.img[indexOfPicture]}/>
      //     </Typography>
      //     <div style={{display: 'flex',flexDirection: 'column',width: '100%',alignItems: 'flex-end',justifyContent:'space-between'}}>
      //       <div style={{display:'flex',width:'96%',flexDirection:'row-reverse',justifyContent:'space-between'}}>
      //         <Typography style={{fontSize: '13px',fontWeight: 'bold'}} variant="body2">
      //           {item.name}
      //         </Typography>
      //         <ClearIcon style={{width:'6%',height: '74%',border: '1px solid',borderRadius: '113%'}}/>
      //       </div>
      //       <div style={{display: 'flex',flexDirection: 'row-reverse',alignItems:'center',width: '100%'}}>
      //         <FaPlus style={{cursor:'pointer'}} onClick={()=>RiseAmount(item,index)}/>
      //       <Typography style={{padding: '8px',fontSize: '16px'}} variant="body2">
      //         {amountOfProduct}
      //       </Typography>
      //       <FaMinus/>
      //         <div style={{width: '100%'}}>
      //         <Typography style={{padding: '8px',fontSize: '16px'}} variant="body2">
      //           {totalPriceOfProduct}₪
      //         </Typography>
      //         </div>
      //       </div>
      //     </div>
      //   </CardContent>
      // </Card>
      //     </ListItem>
        ))}
      </List>
      <Divider/>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            {/* {console.log(anchor)} */}
         <FaShoppingBag style={{cursor:'pointer'}} onClick={toggleDrawerfinal(anchor, true)}/>
          <Drawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawerfinal(anchor, false)}
          >
            {list(anchor)}
            <div className='OrderButton'>
              <p>סך הכל לתשלום:{TotalPrice}</p>
            <Button onClick={()=>MoveToPayment()} style={{width: '73%',height: '6vh'}} variant="contained">הזמן</Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}