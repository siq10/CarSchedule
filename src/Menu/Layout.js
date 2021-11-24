import React, { useEffect, useState } from "react";
import './Layout.css';
import  Navbar  from './Navbar' ;
import { MdMenu } from "react-icons/md";
import { IconContext } from 'react-icons'

import { useSelector } from 'react-redux';
import { userService } from '../_services/user_service';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';

import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import {

  Link
} from "react-router-dom";

var classNames = require('classnames');
function Layout(props) {
  const [active, setActive] = React.useState(false);
  const user_ls = userService.getcurrentuser()
  const auth = useSelector(state => state.auth);
  var LayoutMinimize = classNames({
    'Layout': true,
    'Layout-minimized': !active,
  });


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.changeDrawerState(open)
  };
  return (
    <div>
       <Drawer
            anchor={"left"}
            open={props.drawerState}
            onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
            <ListItemButton component={Link} to={'/profile'} onClick={() => props.setTitle('Profile')}>
              <ListItemIcon >
                <AccountCircleTwoToneIcon className="profileicon" fontSize="large"></AccountCircleTwoToneIcon>
              </ListItemIcon>
              <ListItemText primary={auth.loggedIn?auth.user.username
                :(user_ls.username?user_ls.username:"Guest")} />
            </ListItemButton>
            </List>
            {/* <div className="item profile">
              <img src="/profile30.jpg" alt="Profile pic"></img>
              <div className="namecontainer">
                <h3>{auth.loggedIn?auth.user.username
                :(user_ls?user_ls.username:"Guest")}</h3>
              </div>
            </div> */}
            <Divider />
            <Navbar setTitle={props.setTitle}></Navbar>
          </Box>
        </Drawer>
     
    </div>



    // <div className={LayoutMinimize}>
    //   <header>
    //   <IconContext.Provider value={{color: 'orange'}}>
    //     <div className='menu'>
    //       <div className='menu-bar' onClick={changeActivationState}>
    //           <MdMenu className='icon' />
    //       </div>
    //     </div>
    //     <hr></hr>
        // <div className="item profile">
        //   <img src="/profile30.jpg" alt="Profile pic"></img>
        //   <div className="namecontainer">
        //     <h3>{auth.loggedIn?auth.user.username
        //     :(user_ls?user_ls.username:"Guest")}</h3>
        //   </div>
        // </div>
    //     <hr></hr>
         
    //   </IconContext.Provider>
    //   </header>
    // </div>
  );
}

export default Layout;
