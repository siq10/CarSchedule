import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { useDispatch } from 'react-redux'

import { operationActions } from '../_actions/operation_actions'

function Procedure(props) {
    const dispatch = useDispatch()
    const [operation, setOperation] = useState({})
    useEffect(() => {
      dispatch(operationActions.getOperationDetails(props.procId)).then((op => {
        setOperation(op)
        console.log(op)
      }),
      (err) => {
        console.log(err)
      })
    }, [])
    return (<>
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input color='primary' id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
    </>
  )
}
export default Procedure;
