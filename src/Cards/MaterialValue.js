import * as React from 'react';
import {useContext,useEffect} from 'react';
import { UserContext } from '../Context/InfoContextProvider';


// let materialList=['זהב','כסף','טיטניום','צבעוני']
export default function MaterialValue({material_data,sendData,setList}) {
  debugger
    const [bold, setBold] = React.useState(false);
    const[result,setResult]=React.useState([]);
    const{materials,setMaterials,tempArray,setTempArray}=useContext(UserContext)
    console.log(tempArray);
    console.log(material_data);
    console.log(sendData);
    console.log("ORIGINAL LISTl"+sendData.name);
    const handleBoldChange = () => {
        setBold(!bold);
      };

      useEffect(() => {
        sendData.map((item)=>{
          debugger
          if(item.name===material_data.name)
          {
            setBold(!bold)
            return;
          }
        })
       
          }, []);

    const AddMaterial=(value)=>{
      
        console.log("Value"+value);
        debugger
        if(sendData.includes(value))
        {
            // temp=sendData.filter(item=>item!==value)
           let temp=sendData.filter(item=>value.name!==item.name)
            setMaterials(()=>[...temp])
           console.log(temp);
            // sendData=result
            console.log(sendData);
            handleBoldChange()

            // materials.filter(item=>{
            //     console.log(item);
            //     return item === value
            // })
        }
        else if(materials.includes(value))
        {

        }
        else
        {
          let arr=[];
          arr=value
            console.log(value);
            setMaterials(materials=>[...materials,value])
            // sendData.push(value)
            handleBoldChange()
            console.log(materials);
        }
        // setList(()=>[...temp])

    }


  return (
        <div>
        <form>
            <div>
              <ul className='liFilterMaterial'>
                <li  style={{ fontWeight: bold ? 'bold' : 'normal' }} className='liMaterialAndCount'>
                    <span onClick={()=>AddMaterial(material_data)} style={{marginLeft:'4px'}}>{material_data.name}</span>
                    <span className='CounterStyle'>{material_data.amount}</span>
                </li>
              </ul>
            </div>
          </form>
        </div>
      )
}
