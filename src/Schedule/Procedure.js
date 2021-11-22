import React, { useEffect, useState } from "react"
import './Procedure.css'
import { useLocation } from "react-router"
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { useDispatch } from 'react-redux'
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { MobileDateTimePicker } from '@mui/lab';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/styles';
import { operationActions } from '../_actions/operation_actions'
import Typography from '@mui/material/Typography';

import OperationForm from "./OperationForm";
import OperationNews from "./OperationNews";
import OperationInfo from "./OperationInfo";


function Procedure(props) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({id:props.procId, plate:"-", phone:'-', start:new Date(), model:'-', brand:'-', year:'-'})
    const [tabIndex,setTabIndex] = useState('2')
    const [notifications, setNotifications] = useState({Notifications:[],end_date:new Date(), cost:0,user_car:{car:{brand:""}}})
    const [operationInfo, setOperationInfo] = useState({procedure:{}, confirmed:0, finished:0, cost:0, workload:0,summary:"", user_car:{}, end_date:{} })
    const theme = useTheme()
    const handleChange = (key) => (event) => {
      setFormData({ ...formData, [key]: event.target.value });
      console.log({ ...formData, [key]: event.target.value })
    };
    const switchTab = (event, newIndex) => {
      setTabIndex(newIndex)
    }
    const setDateTime = (datetime) => {
      console.log(datetime, typeof datetime)
      setFormData({ ...formData, ['start']: datetime });
    }

    useEffect(() => {
      dispatch(operationActions.getOperationDetails(props.procId)).then((op => {
        setNotifications(op.Notifications)
        setOperationInfo({procedure:op.procedure, confirmed:op.confirmed, finished:op.finished, cost:op.cost, workload:op.workload,summary:op.summary, user_car:op.user_car, end_date:op.end_date })
        console.log(op)
        setFormData({id:props.procId, plate:op.user_car.plate, phone:op.contact_phone, color:op.user_car.color, start:op.start_date, end:op.end_date, model:op.user_car.car.model, brand:op.user_car.car.brand, year:op.user_car.car.release_year})
      }),
      (err) => {
        console.log(err)
      })
      // console.log(theme)
    }, [])
    return (<Container className='procedure_form_container' sx={ {height:'88vh'} }>
        <TabContext value={tabIndex} sx={{ display:'flex'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  variant="fullWidth" onChange={switchTab} aria-label="Procedure Tabs">
            <Tab  label="News" value="1" />
            <Tab label="Info" value="2" />
            <Tab label="Change" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{padding:'10px 0px'}} value="1">
          <OperationNews notifications={notifications}></OperationNews>
        </TabPanel>
        <TabPanel sx={{padding:'10px 0px',height:'calc(100% - 48px)'}} value="2">
          <OperationInfo info={operationInfo}></OperationInfo>
        </TabPanel>
        <TabPanel sx={{padding:'10px 0px'}} value="3">
        <OperationForm data={formData} setData={setFormData} setDateTime={setDateTime} handleChange={handleChange}></OperationForm>
        </TabPanel>
      </TabContext>



    </Container>
  )
}
export default Procedure;
