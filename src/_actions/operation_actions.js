import { operationConstants, monthnames } from '../_constants/operation_constants';
import { operationService } from '../_services/operations_service';
import { alertActions } from './alert_actions';
import { userService } from '../_services/user_service';

export const operationActions = {
    getClientCurrentOperations,
    getOperationDetails,
    getProcedureTypesFromData,
    getGroupedProceduresBasedOnType,
    updateOperation,
    deleteOperation
};
function updateOperation(operationData)
{
    console.log(operationData)
    return dispatch => {
        let user = userService.getcurrentuser()
        if(user)
        {
            dispatch(request())
            return new Promise((resolve, reject) => {
                operationService.updateOp(user.token,user.id,operationData)
                .then(
                    status => {
                        console.log(status)
                        dispatch(success(status))
                        return resolve(status)
                    },
                    error => {
                        dispatch(failure(error.toString()))
                        dispatch(alertActions.error(error.toString(), true))
                        return reject(error)
                    }
                )
            });
        }
        else
        {
            let errmsg = "User not authenticated!"
            dispatch(failure(errmsg))
            dispatch(alertActions.error(errmsg, true))
            return Promise.reject(errmsg)
        }
    }
    function request() { return { type: operationConstants.UPDATE_CLIENT_OP } }
    function success(status) { return { type: operationConstants.UPDATE_CLIENT_OP, status } }
    function failure(error) { return { type: operationConstants.UPDATE_CLIENT_OP, error } }
}
function deleteOperation(operationId)
{
    return dispatch => {
        let user = userService.getcurrentuser()
        if(user)
        {
            dispatch(request())
            return new Promise((resolve, reject) => {
                operationService.cancelOp(user.token,user.id,operationId)
                .then(
                    status => {
                        console.log(status)
                        dispatch(success(status))
                        return resolve(status)
                    },
                    error => {
                        dispatch(failure(error.toString()))
                        dispatch(alertActions.error(error.toString(), true))
                        return reject(error)
                    }
                )
            });
        }
        else
        {
            let errmsg = "User not authenticated!"
            dispatch(failure(errmsg))
            dispatch(alertActions.error(errmsg, true))
            return Promise.reject(errmsg)
        }
    }
    function request() { return { type: operationConstants.DELETE_CLIENT_OP } }
    function success(status) { return { type: operationConstants.UPDATE_CLIENT_OP, status } }
    function failure(error) { return { type: operationConstants.UPDATE_CLIENT_OP, error } }
}
function getClientCurrentOperations() {
    return dispatch => {
        let user = userService.getcurrentuser()
        if(user)
        {
            dispatch(request())
            return new Promise((resolve, reject) => {
                operationService.getCurrentOps(user.token,user.id)
                .then(
                    operations => {
                        operations.forEach(op => {
                            const date = new Date(op.start_date)
                            op.start_date = `${monthnames[date.getMonth()]}  ${date.getDay()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
                        })
                        dispatch(success(operations))
                        return resolve(operations)
                    },
                    error => {
                        dispatch(failure(error.toString()))
                        dispatch(alertActions.error(error.toString(), true))
                        return reject(error)
                    }
                )
            });
        }
        else
        {
            let errmsg = "User not authenticated!"
            dispatch(failure(errmsg))
            dispatch(alertActions.error(errmsg, true))
            return Promise.reject(errmsg)
        }
    }
    function request() { return { type: operationConstants.GET_CURRENT_OPS_REQUEST } }
    function success(operations) { return { type: operationConstants.GET_CURRENT_OPS_SUCCESS, operations } }
    function failure(error) { return { type: operationConstants.GET_CURRENT_OPS_ERROR, error } }
}

function getOperationDetails(opId) {
    return dispatch => {
        let user = userService.getcurrentuser()
        if(user)
        {
            return new Promise((resolve, reject) => {
                operationService.getOperationForUser(user.token,user.id, opId)
                .then(
                    operation => {
                        operation.start_date = new Date(operation.start_date)
                        // operation.start_date = `${monthnames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
                        if(operation.end_date)
                        {
                            operation.end_date = new Date(operation.end_date)
                            // operation.end_date = `${monthnames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
                        }
                        return resolve(operation)
                    },
                    error => {
                        dispatch(alertActions.error(error.toString()))
                        return reject(error)
                    }
                )

            })
        }
        else
        {
            let errmsg = "User not authenticated!"
            dispatch(alertActions.error(errmsg))
            return Promise.reject(errmsg)
        }
    }
}

function getProcedureTypesFromData(operationData)
{
    const optypes = new Set()
    operationData.forEach(op => optypes.add(op.procedure.type))
    return [...optypes]
}

function getGroupedProceduresBasedOnType(optypes, operationdata)
{
    const result = {}
    optypes.forEach( type => {
        result[type] = []
    })
    operationdata.forEach(op => {
        result[op.procedure.type].push(op)
    })
    console.log(result)
    return result
}