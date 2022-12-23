import React from 'react'
import "./com.css"
import one from "./1.png"
import two from "./2.png"
import three from "./3.png"
import four from "./asus.png"

export default function Com() {
  return (
    <div className='svv'>
        
        <h1>More Products</h1>

        <div className='con'>
           <div class="container" id='sxc'>
  <img src={one} alt="Avatar" class="image"/>
  
  <div class="overlay">Samsung</div>
</div>
<div class="container" id='sxc'>
  <img src={two} alt="Avatar" class="image"/>
  <div class="overlay">Tenda</div>
</div>
<div class="container" id='sxc'>
  <img src={three} alt="Avatar" class="image"/>
  <div class="overlay">Ubiquiti</div>
</div>
<div class="container" id='sxc'>
  <img src={four}alt="Avatar" class="image"/>
  <div class="overlay">Asus</div>
</div>

</div>

        
        
        
        
        
        
        </div>
  )
}
