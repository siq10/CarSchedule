import React, { useRef, useState } from "react"
import './Procedure.css'
import {Utils} from '../_helpers/utils'
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';

import Box from '@mui/material/Box';
import { MobileDateTimePicker } from '@mui/lab';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


import IconButton from '@mui/material/IconButton';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { operationActions } from "../_actions/operation_actions";
import { useDispatch } from 'react-redux'

function OperationForm(props) {
    const dispatch = useDispatch()
    const keysChangedSet = useRef(new Set())

    const registerChange = key => event => {
        keysChangedSet.current.add(key)
        props.handleChange(key)(event)
    }
    const saveOperation = () => {
        let payload = {}
        keysChangedSet.current.forEach((key) => {
            payload[key] = props.data[key]
        })
        payload.id = props.data.id
        // console.log(payload)
        dispatch(operationActions.updateOperation(payload)).then(status => {
        })
    }
    const deleteOperation = () => {
        dispatch(operationActions.deleteOperation(props.data.id)).then(status => {
        })
    }
    const showDate = (params) => {
        return ( 
        <TextField className="datelabel" variant='standard' fullWidth sx={{ m: 1 }}  {...params} InputProps={{
            endAdornment: (
            <InputAdornment position="end" disablePointerEvents>
                <IconButton className='formEditBtn' size='small' >
                <CalendarTodayIcon />
                </IconButton>
            </InputAdornment>
            ),
        }}></TextField>)
    }
    return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    {/* <p className="form_p">{operation.summary}</p> */}
    <FormControl sx={{ m: 1, flexBasis:'25vw' }} variant="standard">
    <InputLabel htmlFor="car-brand">Car Brand</InputLabel>
    <Input
        id="car-brand"
        value={props.data.brand}
        onChange={registerChange('brand')}
    />
    </FormControl>
    <FormControl  sx={{ m: 1, flexBasis:'30vw' }} variant="standard">
    <InputLabel htmlFor="car-model">Car Model</InputLabel>
    <Input
        id="car-model"
        value={props.data.model}
        onChange={registerChange('model')}
    />
    </FormControl>
    <FormControl  sx={{ m: 1, flexBasis:'20vw' }} variant="standard">
    <InputLabel htmlFor="car-year">Year</InputLabel>
    <Input
        id="car-year"
        value={props.data.year}
        onChange={registerChange('year')}
        endAdornment={
        <InputAdornment position="end" disablePointerEvents>
            <IconButton className='formEditBtn' size='small' 
            aria-label="carinfo-change-icon"
            >
            <EditIcon></EditIcon>
            </IconButton>
        </InputAdornment>
        }
    />
    </FormControl>
    {/* <FormControl disabled fullWidth sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="standard-adornment-amount">Estimated Cost</InputLabel>
    <Input
        id="standard-adornment-amount"
        value={operation.cost}
        onChange={handleChange('amount')}
        startAdornment={<InputAdornment position="start">RON</InputAdornment>}
    />
    </FormControl> */}
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="standard-adornment-amount">Plate</InputLabel>
    <Input
        id="standard-adornment-amount"
        type={'text'}
        value={props.data.plate}
        onChange={registerChange('plate')}
        startAdornment={<InputAdornment sx={{width:0,margin:0}} position="start"></InputAdornment>}
        endAdornment={
        <InputAdornment position="end" disablePointerEvents>
            <IconButton className='formEditBtn' size='small' 
            aria-label="toggle password visibility"
            >
            <EditIcon></EditIcon>
            </IconButton>
        </InputAdornment>
        }
    />
    </FormControl>
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="standard-adornment-amount">Phone</InputLabel>
    <Input
        id="standard-adornment-amount"
        type={'text'}
        value={props.data.phone}
        onChange={registerChange('phone')}
        startAdornment={<InputAdornment sx={{width:0,margin:0}} position="start"></InputAdornment>}
        endAdornment={
        <InputAdornment position="end" disablePointerEvents>
            <IconButton className='formEditBtn' size='small' 
            aria-label="toggle password visibility"
            >
            <EditIcon></EditIcon>
            </IconButton>
        </InputAdornment>
        }
    />
    </FormControl>
    {/* <FormControl disabled fullWidth sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="standard-adornment-amount">End Date</InputLabel>
    <Input
        id="standard-adornment-amount"
        type={'text'}
        value={Utils.dateToString(operation.end_date)}
        startAdornment={<InputAdornment sx={{width:0,margin:0}} position="start"></InputAdornment>}
    />
    </FormControl> */}
    <MobileDateTimePicker
    label="Start Date"
    renderInput={(params) => {params.inputProps.value = Utils.dateToString(props.data.start);return showDate(params)}}
    value={props.data.start}
    onChange={props.setDateTime}
    />
    <Button variant="contained"  endIcon={<EditIcon/>} onClick={saveOperation}> 
        Update
    </Button>
    <Button variant="contained" endIcon={<DeleteIcon/>} onClick={deleteOperation}>
        Delete
    </Button>
    </Box>)
}
export default OperationForm;
