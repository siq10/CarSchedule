import React, { useEffect, useState } from "react"
import './OperationNews.css'
import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'

import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import EditIcon from '@material-ui/icons/Edit';

dayjs.extend(relativeTime)

function OperationNews(props) {
    return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <Stack spacing={0.5} sx={{ width: '100%' }}>
    {props.notifications.map((item) => {
        return (
            <Alert key={item.id} severity={item.type} >
                <p className="notifMsg">{item.message}</p>  
                <p className="notifInfo">{item.additional_info}</p>  
                <p className="notifInfo">{dayjs(new Date(item.updatedAt)).fromNow()}</p>  

            </Alert>) 
        })
    }
    </Stack>
    </Box>)
}
export default OperationNews;
