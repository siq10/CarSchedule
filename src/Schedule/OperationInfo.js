import React, { useEffect, useState } from "react"
import './OperationInfo.css'


import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import EditIcon from '@material-ui/icons/Edit';

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration)

function OperationInfo({info,...props}) {
    const alertTypes = ['warning', 'error']
    const alertMsg = {warning:"This procedure needs your attention", error:"Procedure is blocked. We will contact you soon to resolve the issue"}
    return (
    <Box component="section" role="presentation" sx={{ display: 'flex', flexWrap: 'wrap', margin:'0', height:'100%'}}>
        <Stack spacing={0.5} sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom component="h2">
                {info.procedure.type}
            </Typography>
            
            <Typography paragraph gutterBottom >
                Description:
            </Typography>
            <ul className="summaryList">
            <Typography gutterBottom component="li">{info.summary}</Typography>
            </ul>
            <Typography paragraph gutterBottom >
                Estimated duration: <b> {dayjs.duration(info.procedure.workload, "hours").humanize()} </b>
            </Typography>
            <Typography paragraph gutterBottom >
                Estimated cost: <b> {info.cost} RON </b>
            </Typography>
            <Typography paragraph gutterBottom >
                <span>{info.finished ? 'Operation finished on' : 'Operation expected to finish on'}</span>
                <b> {dayjs(info.end_date).format('DD MMM YYYY, HH:mm:ss')} </b>
            </Typography>
        </Stack>
        { info.confirmed === 0 ?
        <Alert variant='outlined' className="infoAlert" severity='warning'>
            This operation has not yet been confirmed. Please check back later
        </Alert> : info.confirmed!==1 ?
        <Alert variant='outlined' className="infoAlert" severity={alertTypes[info.confirmed - 2]}>
            {alertMsg[alertTypes[info.confirmed - 2]]}
        </Alert>:null}

    </Box>)
}
export default OperationInfo;
