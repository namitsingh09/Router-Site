import React from 'react';
import "./Nav.css"
import rose from "./rose.jpg"

const Nav = () => {
    return (
        <div className='navv'>
            <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={rose} width="30" height="10" className="d-inline-block align-top" alt=""/>
    Rosebuds
  </a>
</nav>
            
        </div>
    );
}

export default Nav;
