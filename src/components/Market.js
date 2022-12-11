import * as React from 'react';
import {useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import products from './Products';
import '../style/Card.css'
import Filter from './Filter';
import Item from '../Modals/Item';
import { UserContext } from '../Context/InfoContextProvider';
import {  useReducer } from 'react'
import ProductList from '../Cards/ProductList';
import { useLocation } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios, { Axios } from 'axios';
import Button from '@mui/material/Button';

let arrayOf=localStorage.getItem('items');
let newArrayOf=JSON.parse(arrayOf)
console.log(newArrayOf);
const list=products;
let array=[];
let flag=false;
const listOfProd=[];
let CategoryFilter=[];
export default function Market() {

  const[listOfProducts,setListOfProducts]=React.useState([]);
 
  const { state } = useLocation();
  console.log(state);
  const [sort, setSort] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFilterShow, setIsFilterShow] = React.useState(false);
  const[minValue,setMinValue]=React.useState(0);
  const[maxValue,setMaxValue]=React.useState(0);
  const{productList,setProductList,itemPopUp,setItemPopUp,cartList,filterList,setFilterList,first,setFirst}=useContext(UserContext)
  const[listAfterFilter,setListAfterFilter]=React.useState(productList);
  const[ifInStock,setIfInStock]=React.useState(false);
  const[stock,setStock]=React.useState(false);
  const[index, setIndex] = React.useState(4);
  const [isCompleted, setIsCompleted] = React.useState(false)

console.log(productList);
console.log(listAfterFilter);
let temp=listAfterFilter
console.log("FILETR "+filterList);
console.log("ORIGINAL "+list);
const itemOf=(item)=>{
  setItemPopUp(item)
  setIsOpen(true)
  // {isOpen && <Modal setIsOpen={setIsOpen} item={item}/>}
  console.log(itemPopUp);
}


const handleChange = (event) => {
  setSort(event.target.value);
};

useEffect(()=>{
  CategoryFilter=[]
  if(state===null)
  {
    console.log(productList);
    temp=productList
    setListAfterFilter(()=>[...temp])
    return;
  }
  else
{  
  console.log(productList);
  temp=productList
  console.log(state.categor);
  console.log(temp);
      temp.map(item=>{
        // console.log(item);
        item.cat.map(categoria=>{
          if(CategoryFilter.includes(item))
          {
  
          }
          else if(categoria==state.categor)
          {
            CategoryFilter.push(item)
            
          }
        })
        
      })}
      setListAfterFilter(()=>[...CategoryFilter])
      
  console.log(CategoryFilter);
},[state])




useEffect(()=>{
  
if(!flag)
{
  debugger
// axios.get('http://localhost:5000/items/')
// .then(result=>{
//   setListOfProducts(result.data)
// })
// .catch((error)=>{
//   console.log(error);
// })
  // console.log(listOfProducts);
//  axios.get('http://localhost:5000/items/',{
//    headers:{
//      "Content-type":"application/json"
//  }
//  })
//  .then(response=>{
//    debugger
//    array=response.data
//    console.log(array);
//    setListOfProducts(()=>[...array])
//    console.log(listOfProducts);
//  })
//  .catch((error)=>{
//    console.log(error);
//  })
}
},[])

// const ChangePicure=(index)=>{
//  setIndexOfPicture(index)
// }

const sortFromHighToLow=(order)=>{

  let sort=listAfterFilter
  switch(order){
    case 'low':
      sort.sort(function (a, b) { return a.price - b.price });
      break;
    case 'high':
      sort.sort(function (a, b) { return b.price - a.price });
      break;
  }
  setListAfterFilter(()=>[...sort])
}

const handleClick = (pointer) => {
  // 👇️ refers to the image element
  console.log(pointer);
  
  console.log('Image clicked'+pointer);
}

const setIndexOf=()=>{
  let indexOf=index+5
  setIndex(indexOf)
}

const loadMore = () => {
  debugger
  setIndexOf()
  console.log(index)
  if (index >= listAfterFilter.length) {
    setIsCompleted(true)
  } else {
    setIsCompleted(false)
  }
}

  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center'}}>
      <div  style={{height:'38vh',width:'100%',backgroundSize:'cover',backgroundImage: `url("https://imgs.search.brave.com/m7Z8siI9q0aOD1bcHTIZ0Y9Qg4XkQ2nfWUZd8PosIY4/rs:fit:800:605:1/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmdvbmVy/b2d1ZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDkv/TW9kZWwtRWFycmlu/Z3MtUmluZy1KZXdl/bHJ5LUJlYXV0eS1N/YWtldXAuanBn")`}}>
      </div>
      {isOpen ? <Item  item={itemPopUp} InStock={stock} setStock={setStock}/>:null}
      <div style={{width:'100%',display:'flex',flexDirection:'row-reverse'}}>
        <div style={{width:'100%',display:'flex',flexDirection:'row-reverse',marginRight:'5px',marginTop:'5px',alignItems:'center'}}>
          <div style={{cursor:'pointer'}}>
        <Filter   ChangeIsShown={isFilterShow} anchor={'right'} Filterof={listAfterFilter} setIndex={setIndex} setListProps={setListAfterFilter} />
        </div>
        <span style={{marginRight:'4px',fontSize:'13px'}}>
          סינון לפי
        </span>
        </div>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">sort</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sort}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem onClick={()=>sortFromHighToLow('low')} value={'low'}>מהנמוך לגבוה</MenuItem>
    <MenuItem onClick={()=>sortFromHighToLow('high')} value={'high'}>מהגבוה לנמוך</MenuItem>
  </Select>
</FormControl>
</Box>
        {/* <button onClick={()=>sortFromHighToLow('low')} style={{width:'175px',marginLeft:'12px',marginTop:'5px'}}>מהנמוך לגבוה</button>
        <button onClick={()=>sortFromHighToLow('high')} style={{width:'175px',marginLeft:'12px',marginTop:'5px'}}>מהגבוה לנמוך</button> */}

      </div>
      <ProductList index={index} inStock={ifInStock} setInStock={setIfInStock} listOfProducts={listAfterFilter}/>
      <div className="d-grid mt-3 mb-5">
        {index >= listAfterFilter.length ? (
          
          <Button
          style={{marginBottom:'10px',marginTop:'12px',borderRadius:'78%',height:'76px',border:'2px solid blue'}}
           onClick={loadMore}
            variant="outlined"
             size="large"
          >
            That's It
          </Button>
        ) : (
          <Button 
          style={{marginBottom:'10px',marginTop:'12px',borderRadius:'78%',height:'76px',border:'2px solid blue'}}
           onClick={loadMore}
            variant="outlined"
             size="large">
          More
        </Button>
        )}
      </div>
    </div>
  )
}
