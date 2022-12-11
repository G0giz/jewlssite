import * as React from 'react';
import { UserContext } from '../Context/InfoContextProvider';

let materials=[];
let materialList=[{name:'זהב'},{name:'כסף'},{name:'טיטניום'},'צבעוני']
export default function MaterialFilter({ChangeIsShown,setListProps}) {
    const{productList,setProductList,filterList,setFilterList}=React.useContext(UserContext)
    const [bold, setBold] = React.useState(false);




    const AddMaterial=(value)=>{
        debugger
        console.log(value);
        if(materials.includes(value))
        {
            debugger
            materials.filter(item=>{
                console.log(item);
                return item.name === value
            })
        }
        else
        {
            materials.push(value)
        }
        debugger
       console.log(materials);
    }
  
  return (
    <div>
       <div>
          <form>
            <div>
              <p>
                חומר
              </p>
              <ul className='liFilterMaterial'>
                {
                  materialList.map((item,index)=>{
                    return <li key={index} style={{ fontWeight: bold ? 'bold' : 'normal' }} className='liMaterialAndCount'>
                    <span onClick={()=>AddMaterial(item)} style={{marginLeft:'4px'}}>{item.name}</span>
                    <span className='CounterStyle'>4</span>
                </li>
                  })
                }
              </ul>
            </div>
          </form>
        </div>
       
       </div>
  )
}
