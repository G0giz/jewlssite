import * as React from 'react';
import {useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import products from './Products';
import '../style/Card.css'
import Filter from './Filter';
import Modal from '../Modals/Item';
import { UserContext } from '../Context/InfoContextProvider';

const list=products

export default function ByCategory() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [isFilterShow, setIsFilterShow] = React.useState(false);
  const{itemPopUp,setItemPopUp,cartList,filterList,setFilterList}=useContext(UserContext)

const itemOf=(item)=>{
  setItemPopUp(item)
  setIsOpen(true)
  // console.log(item);
  // {isOpen && <Modal setIsOpen={setIsOpen} item={item}/>}
  // console.log(itemPopUp);
}


  return (
    <div style={{display: 'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center'}}>
      <div  style={{height:'38vh',width:'100%',backgroundSize:'cover',backgroundImage: `url("https://imgs.search.brave.com/m7Z8siI9q0aOD1bcHTIZ0Y9Qg4XkQ2nfWUZd8PosIY4/rs:fit:800:605:1/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmdvbmVy/b2d1ZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDkv/TW9kZWwtRWFycmlu/Z3MtUmluZy1KZXdl/bHJ5LUJlYXV0eS1N/YWtldXAuanBn")`}}>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} item={itemPopUp}/>}
      <div style={{width:'100%'}}>
        <div style={{width:'100%',display:'flex',flexDirection:'row-reverse',marginRight:'5px',marginTop:'5px'}}>
        <Filter ChangeIsShown={isFilterShow} anchor={'right'}/>
        <span style={{marginRight:'4px',fontSize:'13px'}}>
          סינון לפי
        </span>
        </div>
      </div>
      <div>
        <ul style={{padding: '0'}}>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      {filterList.map((item)=>{
        return<div className='CardsResponsive' style={{width: '171px'}}>
            <li className='LiCardHeight' style={{padding:'0',height:'100%'}}>
                <Card className='CardHeight' style={{width:'100%',height:'90%'}} sx={{ minWidth: 275 }}>
                  <CardContent style={{}}>
                    <img onClick={() => {itemOf(item)}} style={{height: '111px'}}  src='https://imgs.search.brave.com/KehBkS88q-wiGhPQNewfF8HxrP-NQPcsLcIav8wPGhY/rs:fit:200:200:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/L193cEpVY1BVODAt/VS9USUR3WEo5M2E3/SS9BQUFBQUFBQUJj/SS90U2twZ0MwS2lL/dy9zMjAwL2xhYmlv/MS5wbmc'/>
                    <div style={{display: 'flex',flexDirection: 'column',width: '100%',alignItems: 'flex-end'}}>
                    <Typography variant="body2">
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      {item.price}₪
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
            </li>
      </div>
      })}
        </div>
      </ul>
      </div>
    </div>
  )
}
