import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MenuData } from './MenuData'
import { Link } from "react-router-dom";
import './Navbar.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
function Navbar() {
    return (
        <nav>
            <List>
                {MenuData.map((item,index) => {
                    return (
                        <ListItem button component={Link} to={item.path} key={index}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    )
                })}
            </List>
               
        </nav>
    )
}
export default Navbar;