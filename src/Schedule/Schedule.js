import React, { useEffect, useState, useCallback } from 'react'
import {useHistory} from 'react-router-dom'
import { MdCreate } from "react-icons/md"
import { MdEdit } from "react-icons/md"
import Button from '@mui/material/Button';

import './Schedule.css'

import { useDispatch, useSelector } from 'react-redux'
import { operationActions } from '../_actions/operation_actions'
import { userService } from '../_services/user_service';

import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import WarningIcon from '@material-ui/icons/Warning';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@mui/material/Typography';

function Schedule() {
    const dispatch = useDispatch()
    const user_ls = userService.getcurrentuser()
    const auth = useSelector(state => state.auth);
    const currentOps = useSelector(state => state.operation.current)
    const [resultData, setResultData] = useState([])

    // const [procedureTypes, setProcedureTypes] = useState([])
    // const [groupedProcedures, setGroupedProcedures] = useState([])
    const history = useHistory();
    const gotoEditOperation = useCallback((procedure) => history.push('/procedures/' + procedure.id, procedure));

    useEffect(() => {
        var userdata = {}
        if(auth)
        {
            userdata = auth.user
        }
        else
        {
            userdata = user_ls
        }
        dispatch(operationActions.getClientCurrentOperations(userdata.token, userdata.id))
        .then((response) => {
            console.log(response)
            setResultData(response.map(op => [
            `${op.procedure.type} - ${op.user_car.plate}`,
            op.start_date,
            op.confirmed,
            op.finished,
            op.id
            ]))
            console.log(resultData)

            // let ptypes = operationActions.getProcedureTypesFromData(response)
            // setProcedureTypes(ptypes)
            // setGroupedProcedures(operationActions.getGroupedProceduresBasedOnType(ptypes,response))
        },
            error => console.error(error)
        )
    }, [])
    return (
        <Container>
        <Paper >
        <section> 
            <h2>Your Current Appointments ({currentOps.length})</h2>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            { resultData.map(data => 
                <ListItem button key={data[4]}>
                    <ListItemAvatar>
                    <Avatar>
                        <WorkIcon> </WorkIcon>
                    </Avatar>
                    {data[2]==1 ? 
                    <CheckCircleIcon className="opstatus"></CheckCircleIcon> :
                    <WarningIcon className="opstatus"></WarningIcon> }
                    </ListItemAvatar>
                    <ListItemText primary={data[0]} 
                                secondary={data[1]} />
                </ListItem>
            )
            }
            </List>
            {/* {procedureTypes.map((type,index) => 
                <section key={index}>
                    <h4>{type}</h4>
                    {groupedProcedures.hasOwnProperty(type) &&
                        groupedProcedures[type].map(procedure => 
                        <section key={procedure.id}>
                        <Button variant="contained" onClick={() => gotoEditOperation(procedure)}> <MdEdit/> Edit</Button>
                        <h5>{procedure.user_car.car.brand + " " + 
                            procedure.user_car.car.model + " (" +
                            procedure.user_car.car.release_year + ")"}</h5>

                        <ul>
                            <li>Short description: {procedure.procedure.description}</li>
                            <li>Summary: {procedure.summary}</li>
                            <li>Start time: {procedure.start_date}</li>
                            <li>Time spent: {procedure.procedure.workload} hours</li>
                            <li>Initial cost: {procedure.cost} </li>
                            <li>Contact number: {procedure.contact_phone}</li>
                        </ul>
                        { procedure.confirmed == 0 ?
                            <p>Your appointment has not been confirmed, yet.</p> :
                            <p>Your appointment has been confirmed!</p>
                        }
                        </section>
                        )
                    }

                </section>
            )} */}
        
        </section>

        <button> <MdCreate/> Create new Appointment</button>
        
        </Paper>
        </Container>
        )
}

export default Schedule