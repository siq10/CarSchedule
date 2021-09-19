import React, { useEffect, useState } from 'react'
import { MdCreate } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { operationActions } from './_actions/operation_actions'
import { userService } from './_services/user_service';

function Schedule() {
    const dispatch = useDispatch()
    const user_ls = userService.getcurrentuser()
    const auth = useSelector(state => state.auth);
    const currentOps = useSelector(state => state.operation.current)
    const [procedureTypes, setProcedureTypes] = useState([])
    const [groupedProcedures, setGroupedProcedures] = useState([])
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
            let ptypes = operationActions.getProcedureTypesFromData(response)
            setProcedureTypes(ptypes)
            setGroupedProcedures(operationActions.getGroupedProceduresBasedOnType(ptypes,response))
        },
            error => console.error(error)
        )
    }, [])
    return (
        <>
        <section> 
            <h2>Your Current Appointments ({currentOps.length})</h2>
            {procedureTypes.map((type,index) => 
                <section key={index}>
                    <h4>{type}</h4>
                    
                    {groupedProcedures.hasOwnProperty(type) &&
                     groupedProcedures[type].map(procedure => 
                        <section key={procedure.id}>
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
                        {procedure.confirmed == 0?<p>Your booking has not been confirmed yet.</p> : null}
                        </section>
                        
                        )
                    }

                </section>
            )}
     
        </section>
        <button> <MdCreate/> Create new Appointment</button>
        
        </>
        )
}

export default Schedule