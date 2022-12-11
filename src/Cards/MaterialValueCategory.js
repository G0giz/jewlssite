import * as React from 'react';
import {useContext,useEffect} from 'react';
import { UserContext } from '../Context/InfoContextProvider';

// let materialList=['זהב','כסף','טיטניום','צבעוני']
export default function MaterialValue({material_dataCategory,sendDataCategory,setList}) {
    const [bold, setBold] = React.useState(false);
    const[result,setResult]=React.useState([]);
    const{categoryList,setCategoryList,tempArray,setTempArray}=useContext(UserContext)

    // console.log(material_dataCategory);
  // console.log(sendDataCategory);



    // useEffect(() => {
    //    sendDataCategory.map(item=>
    //     {
    //         temp.map(itemOf=>{
    //             console.log(item)
    //             console.log(itemOf)
    //              if(item.name===itemOf.name)
    //              {
    //                 handleBoldChange()
    //              }

    //         })
    //     })
  
    // }, []);

    useEffect(() => {
      
      sendDataCategory.map((item)=>{
        
        if(item.name===material_dataCategory.name)
        {
          setBold(!bold)
          return;
        }
      })
     
        }, []);

    const handleBoldChange = () => {
        setBold(!bold);
      };



    const AddMaterial=(value)=>{
      debugger
        console.log(value);
        if(sendDataCategory.includes(value))
        {
          debugger
            // temp=sendData.filter(item=>item!==value)
           let arrayOf=sendDataCategory.filter(item=>item!==value)
           setCategoryList(()=>[...arrayOf]) 
           console.log(arrayOf);

            // sendData=result
            console.log(sendDataCategory);
            handleBoldChange()

            // materials.filter(item=>{
            //     console.log(item);
            //     return item === value
            // })
        }
        else if(categoryList.includes(value))
        {

        }
        else
        {
          let arr=[]
          arr=value
            console.log(value);
            setCategoryList(categoryList=>[...categoryList,value])
            // sendData.push(value)
            handleBoldChange()
        }


    }


  return (
        <div>
        <form>
            <div>
              <ul className='liFilterMaterial'>
                <li  style={{ fontWeight: bold ? 'bold' : 'normal' }} className='liMaterialAndCount'>
                    <span onClick={()=>AddMaterial(material_dataCategory)} style={{marginLeft:'4px'}}>{material_dataCategory.name}</span>
                    <span className='CounterStyle'>{material_dataCategory.amount}</span>
                </li>
              </ul>
            </div>
          </form>
        </div>
      )
}
