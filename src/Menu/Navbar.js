import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MenuData } from './MenuData'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(props) {
    const [sidebar, setSidebar] = useState(props.activation);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <nav className="Layout-nav">
                <ul className='nav-menu-list'>
                    {MenuData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
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
}
export default Navbar;