import React, { useEffect } from "react"
import { useLocation } from "react-router"
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';


function Procedure() {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
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
