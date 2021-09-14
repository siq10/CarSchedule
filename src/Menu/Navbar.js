import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MenuData } from './MenuData'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(props) {
    if(props.activation)
    return (
        <>
            <nav className="Layout-nav">
                <ul className='nav-menu-list'>
                    {MenuData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={() => {props.removeBar()}}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
    else
    return null
}
export default Navbar;