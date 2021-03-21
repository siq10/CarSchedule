import React, { useEffect, useState } from "react";
import './Layout.css';
import  Navbar  from './Navbar' ;
import { MdMenu } from "react-icons/md";
import { IconContext } from 'react-icons'


import {

  Link
} from "react-router-dom";

function Layout() {
  const [active, setActive] = React.useState(false);
  const changeActivationState = () => {setActive(!active);}
  // useEffect(() => {
  //   console.log(active + " from Layout")
  // }, [active]);
  return (
    <div className="Layout">
      <header>
      <IconContext.Provider value={{color: 'orange'}}>
        <div className='menu'>
          <Link to='#' className='menu-bar'>
              <MdMenu className='icon' onClick={changeActivationState} />
          </Link>
        </div>
        <hr></hr>
        <div class="item profile">
          <img src="/profile30.jpg" alt="Profile pic"></img>
          <div class="namecontainer">
            <h3>Gicu Gigel</h3>
          </div>
        </div>
        <hr></hr>
        <Navbar activation={active}></Navbar>
         
      </IconContext.Provider>
      </header>
    </div>
  );
}

export default Layout;
