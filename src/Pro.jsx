import React, { useState, useEffect } from 'react'
import "./Pro.css"
export default function Pro() {
  const [post, getPost] = useState([])

  
  const API = 'http://localhost:3000/image';







 
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
       
        getPost(res)
        console.log(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])



  
  return (
    <>
      <h1 id='lo'>Browser Products </h1>
      
      <ul id='asx'>
        {post.map((item) => {
          return <div className="card">
            
          <img src={item.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.price}</h5>



           
            <p class="card-text">ROUTER NAME</p>
          
            <a href="#" class="btn btn-primary">Buy Now !</a>
          </div>
        </div>
    
        })}
      </ul>
    </>
  )
}