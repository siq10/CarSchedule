import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MenuData } from './MenuData'
import { Link } from "react-router-dom";
import './Navbar.css'
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
function Navbar(props) {
    return (
        <nav>
            <List>
                {MenuData.map((item,index) => {
                    return (
                        <ListItemButton component={Link} to={item.path} key={index} onClick={() => props.setTitle(item.title)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    )
                })}
            </List>
               
        </nav>
    )
}
export default Navbar;