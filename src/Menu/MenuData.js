import React from 'react'
import { MdHome } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdImportContacts } from "react-icons/md";

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <MdHome/>
    },
    {
        title: 'Schedule',
        path: '/schedule',
        icon: <MdEventNote/>
    },
    {
        title: 'Tutorials',
        path: '/tutorials',
        icon: <MdSchool/>
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <MdImportContacts/>
    },
]