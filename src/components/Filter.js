import * as React from 'react';
import {useContext,useEffect} from 'react';
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
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import Slider from '@mui/material/Slider';
import { Navigate, useNavigate } from 'react-router-dom'
import MaterialFilter from './MaterialFilter'
import MaterialList from '../Cards/MaterialList';
import MaterialCategory from '../Cards/MaterialCategory';
import category from './Category'
function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 50;
let render=false;
let empty=[]
let materialList=[{name:'זהב',amount:0},{name:'כסף',amount:0},{name:'טיטניום',amount:0},{name:'צבעוני',amount:0}]
export default function Filter({ChangeIsShown,setListProps,Filterof,setIndex}) {
    const [value2, setValue2] = React.useState([100, 1000]);
     const[cat,setCategory]=React.useState(category);
    const{productList,setProductList,filterList,setFilterList,materials,setMaterials,categoryList,setCategoryList}=useContext(UserContext)
    // const[materials,setMaterials]=React.useState([]);
    // const[categoryList,setCategoryList]=React.useState([]);
    // const [bold, setBold] = React.useState(false);
  console.log(materials);
  console.log(categoryList);
    // const handleBoldChange = () => {
    //   setBold(!bold);
    // };

    useEffect(() => {
  
      console.log(render);

      setMaterials(()=>[])
      setCategoryList(()=>[])
      console.log(materials);
      console.log(categoryList);

      if(!render)
      {
      let CatList=category.map(item=>{
        console.log(item)
          productList.forEach(product=>{
             if(product.cat.includes(item.name))
             {
              item.amount+=1
             }
          })
      })
      console.log(CatList);
      setCategory(()=>[...CatList])
      console.log(category);
      setFlagState()
    }

        }, []);

        const setMaterialsEmpty=()=>{
          setMaterials(()=>[...empty])
        }


        const setCategoryListEmpty=()=>{
          setCategory(()=>[...empty])
        }

const setFlagState=()=>{
  render=true;
}

   
    materialList[0].amount=productList.filter(item=>item.materials.includes('זהב')).length
    materialList[1].amount=productList.filter(item=>item.materials.includes('כסף')).length
    materialList[2].amount=productList.filter(item=>item.materials.includes('טיטניום')).length
    materialList[3].amount=productList.filter(item=>item.materials.includes('צבעוני')).length
    console.log(materialList);

    const handleChange2 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
          const clamped = Math.min(newValue[0], 100 - minDistance);
          setValue2([clamped, clamped + minDistance]);
        } else {
          const clamped = Math.max(newValue[1], minDistance);
          setValue2([clamped - minDistance, clamped]);
        }
      } else {
        setValue2(newValue);
      }
    };
  
    const [state, setState] = React.useState({
      right: ChangeIsShown,
    });
  

    const ResetFilter=()=>{
      debugger
      setMaterials(()=>[...[]])
      console.log(materials);
      setCategoryList(()=>[...[]])
        setListProps(()=>productList)
        setState(false)

    }


    const Filter=()=>{
      debugger
      let temp=[];
      console.log(value2[0]);
      console.log(value2[1]);
      console.log(materials);
      if(materials.length===0&&categoryList.length===0)
      {
        console.log(materials.length);
        console.log(categoryList.length);
        
        productList.map((item)=>{
          console.log(item);
             
              if(item.price>=value2[0]&&item.price<=value2[1])
              {
                console.log(temp);
                console.log(temp.indexOf(item));
                if(temp.indexOf(item)!==-1)
                {
                  
                }
                else
                {
                temp.push(item)
                }
              }
 
        })
      setIndex(4)
      setListProps(()=>[...temp])
      
      }
      else if(materials.length!==0&&categoryList.length===0)
      {
        // temp=productList.filter(item=>{return item.materials.includes(materials)})
        console.log(materials);

        console.log(temp);
        productList.map((item)=>{
          console.log(item);
          materials.map(material=>{
            console.log(material);
            
            console.log("LIST"+categoryList); 
             if(item.materials.includes(material.name)&&item.price>=value2[0]&&item.price<=value2[1])
             {
               temp.push(item)
             }
             
          })

        })
        setIndex(4)

        setListProps(()=>[...temp])
      }
      
      else if(materials.length===0)
      {
        
        console.log(categoryList);
        productList.map((item)=>{
          console.log(item);
             
             if(categoryList!==[])
             {
                categoryList.map(catItem=>{
              if(item.cat.includes(catItem.name)&&item.price>=value2[0]&&item.price<=value2[1])
              {
                console.log(temp);
                console.log(temp.indexOf(item));
                if(temp.indexOf(item)!==-1)
                {
                  
                }
                else
                {
                temp.push(item)
                }
              }
                })
            }
        })
        setIndex(4)

      setListProps(()=>[...temp])
      }

      else{
       
        productList.map((item)=>{
          console.log(item);
        
          categoryList.map(catItem=>{
            if(item.cat.includes(catItem.name)&&item.price>=value2[0]&&item.price<=value2[1])
            {
              console.log(temp);
              console.log(temp.indexOf(item));
              if(temp.indexOf(item)!==-1)
              {
                
              }
              else
              {
                debugger
              temp.push(item)
              console.log(temp);

              }
            }
              })

              debugger
          materials.map(material=>{
            console.log(material);
            
            console.log("LIST"+categoryList); 
            console.log(item);
            if(temp.includes(item))
            {
              
            }
            else if(item.materials.includes(material.name)&&item.price>=value2[0]&&item.price<=value2[1])
             {
              debugger
               temp.push(item)
               console.log(temp);

             }
             
          })

        })
        setIndex(4)

        setListProps(()=>[...temp])
      }
      console.log(temp);
      setState(false)
    }

    const toggleDrawerfinal = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const AddMaterial=(value)=>{
      // handleBoldChange()
      if(materials.includes(value))
      {

      }
      else
      {
        materials.push(value)

      }
      console.log(materials);
    }
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        // onClick={toggleDrawerfinal(anchor, false)}
        // onKeyDown={toggleDrawerfinal(anchor, false)}
      >
        <List>
          <div style={{width:'100%',display:'flex',flexDirection:'row-reverse',height:'4vh',justifyContent:'space-between',alignItems:'center'}}>
            <p>
              סינון לפי
            </p>
            <div onClick={()=>setState(!ChangeIsShown)}>
            <CloseIcon />
            </div>
          </div>
        </List>
        <Divider />
        {/* <div>
          <form>
            <div>
              <p>
                חומר
              </p>
              <ul className='liFilterMaterial'>
                {
                  materialList.map((item)=>{
                    return <li  style={{ fontWeight: bold ? 'bold' : 'normal' }} className='liMaterialAndCount'>
                    <span onClick={()=>AddMaterial(item)} style={{marginLeft:'4px'}}>{item}</span>
                    <span className='CounterStyle'>4</span>
                </li>
                  })
                }
              </ul>
            </div>
          </form>
        </div> */}
        {/* <MaterialFilter/> */}
        <MaterialList getData={materials} setListProps={setMaterials} listOfMaterials={materialList} />

        <Divider />
         <MaterialCategory getDataCategory={categoryList} setListProps={setCategoryList} listOfMaterialsCategory={category}/> 
        <Divider />

        <div className='RangeWidth'>
          <span>
            מחיר
          </span>
            <div className='DivRange'>
              <Box sx={{ width: 300 }}>
                      <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        min={100}
                        max={1000}
                        getAriaValueText={valuetext}
                        disableSwap
                      />
                </Box>
                <p>
                  מחיר:{value2[1]}₪-{value2[0]}₪
                </p>
            </div>
        </div>
        <div className='divButtonFilter'>
              <button className='ButtonsFilters' onClick={()=>Filter(productList)}>סינון</button>
              <button className='ButtonsFilters' onClick={()=>ResetFilter()}>איפוס סינון</button>
        </div>
      </Box>
    );
  return (
    <div>
        {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            {console.log(anchor)}
         <TuneTwoToneIcon onClick={toggleDrawerfinal(anchor, true)} fontSize='small'/>
          <Drawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawerfinal(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}</div>
  )
}
