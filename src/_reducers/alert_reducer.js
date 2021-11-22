import { alertConstants } from '../_constants/alert_constants';

export function alertReducer(state = {show:false}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message,
                show: action.show
            };
        case alertConstants.ERROR:
            return {
                type: 'error',
                message: action.message,
                show: action.show
            };
        case alertConstants.WARNING:
            return {
                type: 'warning',
                message: action.message,
                show: action.show
            };
        case alertConstants.CLEAR:
            return {show:false}
        default:
            return state
    }
}