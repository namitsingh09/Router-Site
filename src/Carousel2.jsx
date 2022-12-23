import React from 'react';
import rose from "./s.png"
import "./c2.css"

const Carousel2 = () => {
    return (
        <div className='cson'>
           <h2>Collections</h2>
        
<div className='con'>
           <div class="container">
  <img src={rose} alt="Avatar" class="image"/>
  
  <div class="overlay">WIFI 6</div>
</div>
<div class="container">
  <img src={rose} alt="Avatar" class="image"/>
  <div class="overlay">WIFI 5</div>
</div>
<div class="container">
  <img src={rose} alt="Avatar" class="image"/>
  <div class="overlay">Jio 4g</div>
</div>
</div>




        
        
        
        </div>





        
    );
}

export default Carousel2;
