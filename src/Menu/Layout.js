import React, { useEffect, useState } from "react";
import './Layout.css';
import  Navbar  from './Navbar' ;
import { MdMenu } from "react-icons/md";
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux';
import { userService } from '../_services/user_service';


import {

  Link
} from "react-router-dom";

var classNames = require('classnames');
function Layout() {
  const user_ls = userService.getcurrentuser()
  const auth = useSelector(state => state.auth);
  const [active, setActive] = React.useState(false);
  const changeActivationState = () => {setActive(!active);}
  var LayoutMinimize = classNames({
    'Layout': true,
    'Layout-minimized': !active,
  });
  // useEffect(() => {
  //   console.log(active + " from Layout")
  // }, [active]);
  return (
    <div className={LayoutMinimize}>
      <header>
      <IconContext.Provider value={{color: 'orange'}}>
        <div className='menu'>
          <div className='menu-bar' onClick={changeActivationState}>
              <MdMenu className='icon' />
          </div>
        </div>
        <hr></hr>
        <div className="item profile">
          <img src="/profile30.jpg" alt="Profile pic"></img>
          <div className="namecontainer">
            <h3>{auth.loggedIn?auth.user.username
            :(user_ls?user_ls.username:"Guest")}</h3>
          </div>
        </div>
        <hr></hr>
        <Navbar activation={active} removeBar = {changeActivationState} ></Navbar>
         
      </IconContext.Provider>
      </header>
    </div>
  );
}

export default Layout;
