import React from 'react'
import './style/TestCSS.css'
export default function Slidebar() {
  return (
<div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>  )
}
