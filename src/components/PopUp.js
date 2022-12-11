import * as React from 'react';
import {useContext,useEffect} from 'react';
import Button from '@mui/material/Button';



export default function PopUp({changeState}) {
    const boxRef = React.useRef();

    const ChangeStatePopUp=()=>{
        changeState(!changeState)
    }
    useEffect(() => {
        window.onclick = (event) => {
          if (event.target.contains(boxRef.current)
            && event.target !== boxRef.current) {  
                changeState(!changeState)   
            console.log(`You clicked Outside the box!`);
          } else {     
            console.log(`You clicked Inside the box!`);
          }
        }
    }, []);

    return(
    <div className='popup'>
        <div ref={boxRef} className='popup_inner'>
          <h1 style={{fontSize:'large'}}>ברוכים הבאים לאתר שלנו</h1>
          <Button onClick={()=>ChangeStatePopUp()} variant="outlined">שלח</Button>

        </div>
      </div>    )
}
