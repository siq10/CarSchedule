import { operationConstants } from '../_constants/operation_constants';
import { operationService } from '../_services/operations_service';
import { alertActions } from './alert_actions';

export const operationActions = {
    getClientCurrentOperations,
    getProcedureTypesFromData,
    getGroupedProceduresBasedOnType,
};

function getClientCurrentOperations(token,id) {
    return dispatch => {
        dispatch(request())
        return new Promise((resolve, reject) => {
            operationService.getCurrentOps(token,id)
            .then(
                operations => {
                    dispatch(success(operations))
                    return resolve(operations)
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                    return reject(error)
                }
            )
        });
    }

    function request() { return { type: operationConstants.GET_CURRENT_OPS_REQUEST } }
    function success(operations) { return { type: operationConstants.GET_CURRENT_OPS_SUCCESS, operations } }
    function failure(error) { return { type: operationConstants.GET_CURRENT_OPS_ERROR, error } }
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