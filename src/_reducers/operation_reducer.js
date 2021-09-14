import { operationConstants } from '../_constants/operation_constants';

export function operationReducer(state = {}, action) {
    switch (action.type) {
        case operationConstants.GET_FUTURE_OPS_REQUEST:
            return {...state,
                futureOps: []}
        case operationConstants.GET_FUTURE_OPS_SUCCESS:
            return {...state,
                futureOps: action.operations}
        case operationConstants.GET_FUTURE_OPS_ERROR:
            return {...state,
                futureOps: []}
        case operationConstants.CLEAR:
            return {...state,
                futureOps: []};
        default:
            return state
    }
}