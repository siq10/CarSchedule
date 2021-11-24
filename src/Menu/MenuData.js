import React from 'react'
import { MdHome } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdImportContacts } from "react-icons/md";
import { MdHistory } from "react-icons/md";

import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SchoolIcon from '@material-ui/icons/School';
import RoomIcon from '@material-ui/icons/Room';
import HistoryIcon from '@material-ui/icons/History';

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon className="navitems"></HomeIcon>
    },
    {
        title: 'Schedule',
        path: '/schedule',
        icon: <EventNoteIcon className="navitems"></EventNoteIcon>
    },
    {
        title: 'History',
        path: '/history',
        icon: <HistoryIcon className="navitems"></HistoryIcon>
    },
    {
        title: 'Tutorials',
        path: '/tutorials',
        icon: <SchoolIcon className="navitems"></SchoolIcon>
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <RoomIcon className="navitems"></RoomIcon>
    },
]