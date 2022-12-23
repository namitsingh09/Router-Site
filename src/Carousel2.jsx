import React from 'react';
import rose from "./s.png"
import "./c2.css"
import one from "./one.jpeg"
import two from "./two.jpg"
import three from "./three.jpeg"

const Carousel2 = () => {
    return (
        <div className='cson'>
           <h2>Collections</h2>
        
<div className='con'>
           <div class="container">
  <img src={one} alt="Avatar" class="image"/>
  
  <div class="overlay">WIFI 6</div>
</div>
<div class="container">
  <img src={two} alt="Avatar" class="image"/>
  <div class="overlay">OutDoors</div>
</div>
<div class="container">
  <img src={three} alt="Avatar" class="image"/>
  <div class="overlay">Rapture GT-AX11000</div>
</div>
</div>




        
        
        
        </div>





        
    );
}

export default Carousel2;
