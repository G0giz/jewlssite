import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import '../style/Social.css'
import ReactWhatsapp from 'react-whatsapp';
// import FloatingWhatsApp from 'react-floating-whatsapp'
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Test from '../Test';
import PopUp from './PopUp';
import products from './Products';
localStorage.setItem('items',JSON.stringify(products))

const slideImages = [
  {
    url: 'https://imgs.search.brave.com/m7Z8siI9q0aOD1bcHTIZ0Y9Qg4XkQ2nfWUZd8PosIY4/rs:fit:800:605:1/g:ce/aHR0cHM6Ly93d3cu/ZmFzaGlvbmdvbmVy/b2d1ZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDkv/TW9kZWwtRWFycmlu/Z3MtUmluZy1KZXdl/bHJ5LUJlYXV0eS1N/YWtldXAuanBn',
    caption: 'Pierce Your Way'
  },
  {
    url: 'https://imgs.search.brave.com/fkashg1_DSPkR4FVVZ-jsY2JsQoobohyJLj_IEDPPSo/rs:fit:900:807:1/g:ce/aHR0cDovL2ZpeHRo/ZXBob3RvLmNvbS9i/bG9nL1VzZXJGaWxl/cy9qZXdlbGxlcnkt/cGhvdG9zaG9vdC1p/ZGVhcy1uZWNrbGFj/ZS5qcGc',
    caption: 'Shine Bright Like A Diamond'
  },
  {
    url: 'https://imgs.search.brave.com/pOaBenAo_5qO-7Jp2x8gxRtsXEM9EWvZESuiqcZBuTQ/rs:fit:810:540:1/g:ce/aHR0cHM6Ly93d3cu/amV3ZWxyeXNob3Bw/aW5nZ3VpZGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEyL21pc21hdGNo/LXdvbWFuLWluLWEt/bmVja2xhY2UtODEw/eDU0MC5qcGc',
    caption: 'Works Like A Charm'
  },
];
let number = "0523992602"
let message = "הייתי רוצה לברר פרטים"

export default function HomePage() {

  const[popUpModal,setPopUpModal]=useState(true);
  const navigate = useNavigate()

const sendMessage=()=>{
  navigate('https://api.whatsapp.com/send?phone=544505429&text=Hi!%20I%20want%20to%20increase%20my%20sales!')
}
  return (
    <div className="slide-container" style={{height:'92%'}}>
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div  className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`,height:'100%',backgroundSize:'cover'}}>
            <div style={{height: '78%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end'}}>
            <span style={{color:'white',display: 'flex',background: 'rgba(112,112,112, 0.6)',height: '20%',alignItems:'baseline',width:'50%',justifyContent:'center'}}>
                {slideImage.caption}
                </span>
                <button style={{position: 'fixed',marginBottom: '-8px'}}>PRESS</button>
            </div>
          </div>
        </div>
      ))} 
    </Slide>
      {popUpModal===true?<PopUp changeState={setPopUpModal}/>:<></>}
    <Grid style={{display:'flex',flexDirection:'row-reverse',background: 'rgba(40,40,40, 0.7)'}} container spacing={2} columns={16}>
  <Grid item xs={8}>
  <p>:מיקום</p>
            <p>כתובת חדרה</p>
            <p>:שעות פתיחה</p>
            <p>א'-ו':09:00-18:00</p>
            <p>שני סגור</p>
            <p>:WhatsApp</p>
            <p>0522222222</p>  </Grid>
  <Grid item xs={8}>
  <p>שני סגור</p>
  </Grid>
</Grid>
<Grid item xs={16}>
  <div style={{display:'flex',flexDirection:'row',justifyContent: 'center'}}>
        <div className="social-container">
            <h3 style={{margin:'9px'}}>Social Follow</h3>
            <a href="https://www.facebook.com/gonenl/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/gonen_lifshitz/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
  </div>
  </Grid>

  </div>  
  )
}

            // <a href='https://api.whatsapp.com/send?phone=544505429&text=Hi!%20I%20want%20to%20increase%20my%20sales!'>
            // {/* < WhatsAppIcon/> */}
            // <FloatingWhatsApp />

            // </a>
            // <ReactWhatsapp style={{height:'50px',width:'50px'}} number="+972 52-408-1112" message="Hello World!!!" />