import React,{useState} from 'react';
import 'react-credit-cards/es/styles-compiled.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function CheckOutForm (){
    const[number,setNumber]=useState('')
    const[name,setName]=useState('')
    const[expiry,setExpiry]=useState('')
    const[cvc,setCvc]=useState('')
    const[focus,setFocus]=useState('')
    

      
        return (
         <div style={{marginTop:'9px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div>
                <p>פרטי חיוב</p>
                <div style={{marginBottom:'11px'}}>
                <TextField
                    required
                    style={{marginRight:'14px'}}
                    id="outlined-required"
                    label="כתובת מייל"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="טלפון"
                 />
                 </div>
                 <div style={{marginBottom:'11px'}}>
                <TextField
                    required
                    style={{marginRight:'14px'}}
                    id="outlined-required"
                    label="שם פרטי"
                 />
                <TextField
                    required
                    id="outlined-required"
                    label="שם משפחה"
                />
                </div>
                <TextField
                    required
                    style={{marginBottom:'11px'}}
                    id="outlined-required"
                    label="כתובת מלאה"
                />
                <TextField
                    required
                    style={{marginBottom:'11px'}}
                    id="outlined-required"
                    label="עיר"
                />
            </div>
            {/* <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form style={{display:'flex',flexDirection:'column',width:'57%',alignItems:'center'}}>
            <input
            style={{marginTop:'9px'}}
             type={'tel'}
              name='number'
                placeholder='Card Number'
                value={number}
                 onChange={e=>setNumber(e.target.value)}
                 onFocus={e=>setFocus(e.target.name)}/>
            <input
            style={{marginTop:'9px'}}
             type={'text'}
              name='name'
                placeholder='Name'
                value={name}
                 onChange={e=>setName(e.target.value)}
                 onFocus={e=>setFocus(e.target.name)}/>
            <input
            style={{marginTop:'9px'}}
             type={'text'}
              name='expiry'
                placeholder='MM/YY Expiry'
                value={expiry}
                 onChange={e=>setExpiry(e.target.value)}
                 onFocus={e=>setFocus(e.target.name)}/>
            <input
            style={{marginTop:'9px'}}
             type={'tel'}
              name='cvc'
                placeholder='CVC'
                value={cvc}
                 onChange={e=>setCvc(e.target.value)}
                 onFocus={e=>setFocus(e.target.name)}/>
        </form> */}
         </div>
        );
      
}