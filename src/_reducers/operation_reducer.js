import { operationConstants } from '../_constants/operation_constants';

const initState = {past:[],current:[]}
export function operationReducer(state = initState, action) {
    switch (action.type) {
        case operationConstants.GET_CURRENT_OPS_REQUEST:
            return {...state,
                current: []}
        case operationConstants.GET_CURRENT_OPS_SUCCESS:
            return {...state,
                current: action.operations}
        case operationConstants.GET_CURRENT_OPS_ERROR:
            return {...state,
                current: []}
        case operationConstants.GET_CURRENT_OPS_CLEAR:
            return {...state,
                current: []};
        default:
            return state
    }
}