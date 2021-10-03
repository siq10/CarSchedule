import React, { useEffect} from 'react'


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
import { history } from '../_helpers/history'


/**
 * Function should render list of selectable operations, with short important data.
 * @param {opsArray} props
 *   - opsArray[0]  operation type + car plate
 *   - opsArray[1]  start date for the operation
 *   - opsArray[2]  confirmed status
 *   - opsArray[3]  finished status
 *   - opsArray[4]  procedure_id
 * @returns 
 *
 */
function ProceduresList(props) {
    return (
    <section> 
    <h2>Your Current Appointments ({props.opsArray.length})</h2>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    { props.opsArray.map(data => 
        <ListItem button key={data[4]} onClick={() => history.push(`/schedule/${data[4]}`)}>
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
</section>
    )
}

export default ProceduresList
