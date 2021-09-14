import React, { useEffect } from 'react'
import { MdCreate } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { operationActions } from './_actions/operation_actions'
import { userService } from './_services/user_service';

function Schedule() {
    const dispatch = useDispatch()
    const user_ls = userService.getcurrentuser()
    const auth = useSelector(state => state.auth);
    const currentOps = useSelector(state => state.currentOps)
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
        },
            error => console.error(error)
        )
    }, [])
    return (
        <>
        <section> 
            <h2>Your Current Appointments</h2>
            <ul>
                <li>ITP - 20.10.2021</li>
                
            </ul>
        </section>
        <button> <MdCreate/> Create new Appointment</button>
        </>
        )
}

export default Schedule