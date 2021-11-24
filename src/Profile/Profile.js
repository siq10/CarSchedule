import React, { useEffect, useState } from "react";
import './Profile.css';

import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import { sizing } from '@mui/system';


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Profile() {
    const [expanded, setExpanded] = React.useState(false);

    const [tabid, setTabId] = React.useState(0);
    return (
    <Container>
        <Paper  sx={{ mt:2, position: 'relative',height: '85vh'}} >
            <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={10}>
                <BottomNavigation
                showLabels
                value={tabid}
                onChange={(event, newId) => {
                    setTabId(newId);
                }}
                >
                    <BottomNavigationAction label="Data" icon={<AccountBoxIcon />} />
                    <BottomNavigationAction label="Cars" icon={<TimeToLeaveIcon />} />
                </BottomNavigation>
            </Paper>
        </Paper>


    </Container>
    )
}
export default Profile
