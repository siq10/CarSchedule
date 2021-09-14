import { operationConstants } from '../_constants/operation_constants';
import { operationService } from '../_services/operations_service';
import { alertActions } from './alert_actions';

export const operationActions = {
    getClientCurrentOperations

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