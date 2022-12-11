import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React, { useEffect } from "react";
import "./styles.css";
import HomePage from './components/HomePage';
import Market from './components/Market';
import Sliderbarfinal from './components/Sliderbarfinal';
import Cart from "./components/Cart";
import  InfoContextProvider from './Context/InfoContextProvider';
import Test from "./Test";
import Filter from "./components/Filter";
import CheckOutForm from "./components/ChackOutForm";
import axios from "axios";

function App() {

  
// const getData=async()=>{

//   const ProductsList = await fetch(url,{ mode: 'no-cors'}, {
//     method: 'GET',
//     headers: new Headers({
//         'Content-Type': 'application/json; charset=UTF-8',
//         'Accept': 'application/json; charset=UTF-8'
//     })
// })
//     .then(res => {
//       debugger
//         console.log('res.status', res.status);
//         console.log('res.ok', res.ok);
//         if (res.ok) {
//           debugger
//           console.log(ProductsList);
//             return res.json()
//         }
//         else
//             return null;

//     })
//     .then(      
//         (result) => {
//           debugger
//             console.log("GetAllFavorites = ", result);
//             return result
//         },
//         (error) => {
//           debugger
//             console.log("err GET=", error);
//         });

// return ProductsList
// }


    
  
  return (
    <div className='App'>
      <InfoContextProvider>
      <BrowserRouter>
      <Sliderbarfinal/>
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/Market" element={<Market />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/CheckOutForm" element={<CheckOutForm />} />
      <Route path="/ByCategory" element={<Filter />} />
      </Routes>
      </BrowserRouter>
      </InfoContextProvider>
   </div>
  );
}

export default App;
